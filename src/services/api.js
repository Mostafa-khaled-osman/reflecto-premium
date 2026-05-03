// ──────────────────────────────────────────────────────────────
// Reflecto API Service Layer
// Handles: base requests, token management, silent refresh,
//          and all domain-specific service exports.
// ──────────────────────────────────────────────────────────────

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://reflecto-back.vercel.app/api/v1';

// ─── Token Helpers ───────────────────────────────────────────

const TOKEN_KEYS = {
  access: 'reflecto_access_token',
  refresh: 'reflecto_refresh_token',
  user: 'reflecto_user',
};

export const getAccessToken = () => localStorage.getItem(TOKEN_KEYS.access);
export const getRefreshToken = () => localStorage.getItem(TOKEN_KEYS.refresh);
export const getStoredUser = () => {
  try {
    const raw = localStorage.getItem(TOKEN_KEYS.user);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setTokens = ({ access_token, refresh_token, user }) => {
  if (access_token) localStorage.setItem(TOKEN_KEYS.access, access_token);
  if (refresh_token) localStorage.setItem(TOKEN_KEYS.refresh, refresh_token);
  if (user) localStorage.setItem(TOKEN_KEYS.user, JSON.stringify(user));
};

export const clearTokens = () => {
  localStorage.removeItem(TOKEN_KEYS.access);
  localStorage.removeItem(TOKEN_KEYS.refresh);
  localStorage.removeItem(TOKEN_KEYS.user);
  // Also clear the legacy key used by the old AuthContext
  localStorage.removeItem('reflecto_auth');
};

// ─── Custom Error ────────────────────────────────────────────

export class ApiError extends Error {
  /**
   * @param {number} status
   * @param {string} code
   * @param {string} message
   */
  constructor(status, code, message) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

// ─── Core Request Engine ─────────────────────────────────────

/** Flag to avoid multiple simultaneous refresh attempts */
let isRefreshing = false;
/** Queue of requests waiting for a token refresh */
let refreshQueue = [];

/**
 * Process the queue of waiting requests after a refresh attempt.
 * @param {string|null} newToken – the fresh access token (null = refresh failed)
 */
const processRefreshQueue = (newToken) => {
  refreshQueue.forEach(({ resolve, reject }) => {
    if (newToken) resolve(newToken);
    else reject(new ApiError(401, 'SESSION_EXPIRED', 'Session expired'));
  });
  refreshQueue = [];
};

/**
 * Attempt to refresh the access token silently.
 * @returns {Promise<string>} new access token
 */
const refreshAccessToken = async () => {
  const refresh_token = getRefreshToken();
  if (!refresh_token) {
    throw new ApiError(401, 'NO_REFRESH_TOKEN', 'No refresh token available');
  }

  const res = await fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token }),
  });

  if (!res.ok) {
    clearTokens();
    throw new ApiError(401, 'REFRESH_FAILED', 'Token refresh failed');
  }

  const data = await res.json();
  setTokens({
    access_token: data.access_token,
    refresh_token: data.refresh_token ?? refresh_token,
    user: data.user,
  });

  return data.access_token;
};

/**
 * Low-level request function. Automatically attaches auth headers
 * and handles 401 → silent refresh → retry.
 *
 * @param {string} endpoint – relative path, e.g. "/me"
 * @param {RequestInit & { _retry?: boolean }} options
 * @returns {Promise<any>} parsed JSON body
 */
const request = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  // Build headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const token = getAccessToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = { ...options, headers };

  const response = await fetch(url, config);

  // ── Handle 401 with silent refresh ──
  if (response.status === 401 && !options._retry) {
    if (isRefreshing) {
      // Another call is already refreshing — wait in line
      const newToken = await new Promise((resolve, reject) => {
        refreshQueue.push({ resolve, reject });
      });
      headers['Authorization'] = `Bearer ${newToken}`;
      return request(endpoint, { ...options, headers, _retry: true });
    }

    isRefreshing = true;
    try {
      const newToken = await refreshAccessToken();
      processRefreshQueue(newToken);
      headers['Authorization'] = `Bearer ${newToken}`;
      return request(endpoint, { ...options, headers, _retry: true });
    } catch (err) {
      processRefreshQueue(null);
      // Redirect to login
      clearTokens();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      throw err;
    } finally {
      isRefreshing = false;
    }
  }

  // ── Parse response ──
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data?.error?.code || 'UNKNOWN',
      data?.error?.message || `API Error: ${response.status} ${response.statusText}`
    );
  }

  return data;
};

// ─── Convenience HTTP Methods ────────────────────────────────

const api = {
  get(endpoint, options = {}) {
    return request(endpoint, { ...options, method: 'GET' });
  },
  post(endpoint, body, options = {}) {
    return request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  },
  put(endpoint, body, options = {}) {
    return request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },
  delete(endpoint, options = {}) {
    return request(endpoint, { ...options, method: 'DELETE' });
  },
};

// ═══════════════════════════════════════════════════════════════
// Domain Services
// ═══════════════════════════════════════════════════════════════

// ─── 1. Auth ─────────────────────────────────────────────────

export const authService = {
  /** Send OTP code to a phone number */
  sendOTP(phone) {
    return api.post('/auth/otp/send', { phone });
  },

  /** Verify OTP code and receive tokens */
  verifyOTP(phone, code) {
    return api.post('/auth/otp/verify', { phone, code });
  },

  /** Refresh the access token */
  refreshToken() {
    return refreshAccessToken();
  },

  /** Logout — invalidates tokens on the server */
  logout() {
    return api.post('/auth/logout').finally(() => clearTokens());
  },
};

// ─── 2. Client Profile (authenticated client) ───────────────

export const meService = {
  /** Get full client profile: appointment, loyalty, warranty, stats */
  getProfile() {
    return api.get('/me');
  },

  /** Redeem loyalty points (1000 / 2500 / 5000) */
  redeemPoints(points) {
    return api.post('/me/loyalty/redeem', { points });
  },

  /** Transfer / gift points to another user */
  transferPoints(to_phone, points) {
    return api.post('/me/loyalty/transfer', { to_phone, points });
  },
};

// ─── 3. Checkout / Payments ──────────────────────────────────

export const checkoutService = {
  /** Create a Tabby payment session */
  createTabby(payload) {
    return api.post('/checkout/tabby', payload);
  },

  /** Create a Tamara payment session */
  createTamara(payload) {
    return api.post('/checkout/tamara', payload);
  },

  /** Get all checkout records (admin only) */
  getAll() {
    return api.get('/checkout');
  },
};

// ─── 4. Public Endpoints ─────────────────────────────────────

export const servicesService = {
  /** Get all services */
  getAll() {
    return api.get('/services');
  },
};

export const pricingService = {
  /** Get pricing / packages */
  getAll() {
    return api.get('/pricing');
  },
};

export const contactService = {
  /** Submit a contact / booking form */
  submitForm(formData) {
    return api.post('/contact', formData);
  },
};

// ─── 5. Admin ────────────────────────────────────────────────

export const adminService = {
  /** Admin overview stats */
  getOverview() {
    return api.get('/admin/overview');
  },

  /** Admin scheduling data for a specific date */
  getScheduling(date) {
    const query = date ? `?date=${date}` : '';
    return api.get(`/admin/scheduling${query}`);
  },
};

// ─── 6. Appointments ─────────────────────────────────────────

export const appointmentService = {
  /** List appointments, optionally filtered by status */
  getAll(status) {
    const query = status ? `?status=${status}` : '';
    return api.get(`/appointments${query}`);
  },

  /** Create a new appointment */
  create(data) {
    return api.post('/appointments', data);
  },

  /** Update an appointment (status, progress, etc.) */
  update(id, data) {
    return api.put(`/appointments/${id}`, data);
  },
};

// ─── 7. Clients (admin) ─────────────────────────────────────

export const clientService = {
  /** List clients with pagination */
  getAll(page = 1) {
    return api.get(`/clients?page=${page}`);
  },

  /** Search clients by name or phone */
  search(query) {
    return api.get(`/clients/search?q=${encodeURIComponent(query)}`);
  },

  /** Get a single client by ID */
  getById(id) {
    return api.get(`/clients/${id}`);
  },

  /** Create a client */
  create(data) {
    return api.post('/clients', data);
  },

  /** Update a client */
  update(id, data) {
    return api.put(`/clients/${id}`, data);
  },
};

// ─── 8. Coupons ──────────────────────────────────────────────

export const couponService = {
  /** List all coupons */
  getAll() {
    return api.get('/coupons');
  },

  /** Create a new coupon */
  create(data) {
    return api.post('/coupons', data);
  },

  /** Validate & apply a coupon code */
  apply(code, original_price) {
    return api.post('/coupons/apply', { code, original_price });
  },
};


export default api;