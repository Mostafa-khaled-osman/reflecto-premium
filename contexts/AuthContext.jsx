/**
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated
 * @property {Object|null} user
 * @property {string|null} phone
 * @property {boolean} isLoading
 */

/**
 * @typedef {Object} AuthContextValue
 * @property {boolean} isAuthenticated
 * @property {Object|null} user
 * @property {string|null} phone
 * @property {boolean} isLoading
 * @property {(phone: string) => void} login
 * @property {() => void} logout
 */

/**
 * @typedef {'LOGIN' | 'LOGOUT' | 'SET_LOADING'} AuthActionType
 */

/**
 * @typedef {Object} AuthAction
 * @property {AuthActionType} type
 * @property {{ phone?: string }=} payload
 */

import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext(/** @type {AuthContextValue|null} */ (null));

const initialState = /** @type {AuthState} */ ({
  isAuthenticated: false,
  user: null,
  phone: null,
  isLoading: true,
});

/**
 * @param {AuthState} state
 * @param {AuthAction} action
 * @returns {AuthState}
 */
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        phone: action.payload?.phone || null,
        user: { phone: action.payload?.phone },
        isLoading: false,
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

/**
 * @param {{ children: React.ReactNode }} props
 */
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedAuth = localStorage.getItem('reflecto_auth');
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        dispatch({ type: 'LOGIN', payload: { phone: parsed.phone } });
      } catch {
        localStorage.removeItem('reflecto_auth');
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  /**
   * @param {string} phone
   */
  const login = (phone) => {
    const authData = { phone, timestamp: Date.now() };
    localStorage.setItem('reflecto_auth', JSON.stringify(authData));
    dispatch({ type: 'LOGIN', payload: { phone } });
  };

  const logout = () => {
    localStorage.removeItem('reflecto_auth');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * @returns {AuthContextValue}
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;