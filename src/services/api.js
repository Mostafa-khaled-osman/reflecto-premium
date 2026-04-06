const API_BASE_URL = import.meta.env.VITE_API_URL || '';

class ApiError extends Error {
  constructor(response) {
    super(`API Error: ${response.status} ${response.statusText}`);
    this.status = response.status;
    this.statusText = response.statusText;
    this.ok = false;
  }
}

const api = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new ApiError(response);
    }

    return response.json();
  },

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  },

  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  },
};

export const authService = {
  async sendOTP(phone) {
    return api.post('/auth/otp/send', { phone });
  },

  async verifyOTP(phone, code) {
    return api.post('/auth/otp/verify', { phone, code });
  },

  async logout() {
    return api.post('/auth/logout');
  },
};

export const contactService = {
  async submitForm(formData) {
    return api.post('/contact', formData);
  },
};

export const clientService = {
  async getClients() {
    return api.get('/clients');
  },

  async getClient(id) {
    return api.get(`/clients/${id}`);
  },

  async updateClient(id, data) {
    return api.put(`/clients/${id}`, data);
  },
};

export const schedulingService = {
  async getAppointments() {
    return api.get('/appointments');
  },

  async createAppointment(data) {
    return api.post('/appointments', data);
  },

  async updateAppointment(id, data) {
    return api.put(`/appointments/${id}`, data);
  },
};

export default api;