/**
 * AuthContext — manages authentication state with real token-based auth.
 *
 * Stores: access_token, refresh_token, user { id, full_name, role, phone }
 * Provides: login (save tokens), logout (clear + call API), isAuthenticated, user, role checks
 */

import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import {
  getAccessToken,
  getRefreshToken,
  getStoredUser,
  setTokens,
  clearTokens,
  authService,
} from '../services/api';

// ─── Types ───────────────────────────────────────────────────

/**
 * @typedef {Object} AuthUser
 * @property {string} id
 * @property {string} full_name
 * @property {string} role - "client" | "admin"
 * @property {string} [phone]
 */

/**
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated
 * @property {AuthUser|null} user
 * @property {string|null} phone - phone number used during OTP flow (before verify)
 * @property {boolean} isLoading
 */

// ─── Context ─────────────────────────────────────────────────

const AuthContext = createContext(null);

const initialState = /** @type {AuthState} */ ({
  isAuthenticated: false,
  user: null,
  phone: null,
  isLoading: true,
});

// ─── Reducer ─────────────────────────────────────────────────

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        phone: action.payload.user?.phone || state.phone,
        isLoading: false,
      };
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        phone: null,
        isLoading: false,
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload ?? true };
    default:
      return state;
  }
};

// ─── Provider ────────────────────────────────────────────────

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Restore session from localStorage on mount
  useEffect(() => {
    const token = getAccessToken();
    const user = getStoredUser();

    if (token && user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
    } else {
      // Also check legacy key for backwards compat
      const legacy = localStorage.getItem('reflecto_auth');
      if (legacy) {
        try {
          const parsed = JSON.parse(legacy);
          // Migrate: treat as authenticated but with minimal user info
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user: { phone: parsed.phone, role: 'client' } },
          });
        } catch {
          localStorage.removeItem('reflecto_auth');
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
  }, []);

  /**
   * Save the phone number being used for OTP (before verification).
   * Called from LoginView after successfully sending OTP.
   */
  const setPhone = useCallback((phone) => {
    dispatch({ type: 'SET_PHONE', payload: phone });
  }, []);

  /**
   * Complete login — called after OTP verification succeeds.
   * Saves tokens to localStorage and updates context.
   *
   * @param {{ access_token: string, refresh_token: string, user: AuthUser }} data
   */
  const login = useCallback((data) => {
    setTokens({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      user: data.user,
    });
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user: data.user } });
  }, []);

  /**
   * Logout — clears tokens locally and notifies the server.
   */
  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch {
      // Server call failed — still clear local state
    }
    clearTokens();
    dispatch({ type: 'LOGOUT' });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        setPhone,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ─── Hook ────────────────────────────────────────────────────

/**
 * @returns {{ isAuthenticated: boolean, user: AuthUser|null, phone: string|null, isLoading: boolean, setPhone: Function, login: Function, logout: Function }}
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;