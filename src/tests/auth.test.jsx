import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

const TestComponent = () => {
  const { isAuthenticated, login, logout, phone } = useAuth();
  return (
    <div>
      <span data-testid="auth-status">{isAuthenticated ? 'authenticated' : 'not-authenticated'}</span>
      <span data-testid="phone">{phone || 'no-phone'}</span>
      <button onClick={() => login('+20123456789')}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

describe('AuthContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('provides initial unauthenticated state', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('auth-status').textContent).toBe('not-authenticated');
  });

  it('logs in user and sets phone', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByTestId('auth-status').textContent).toBe('authenticated');
    expect(screen.getByTestId('phone').textContent).toBe('+20123456789');
  });

  it('persists auth state to localStorage', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Login'));
    expect(localStorage.getItem('reflecto_auth')).toBeTruthy();
  });

  it('logs out user and clears localStorage', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Login'));
    fireEvent.click(screen.getByText('Logout'));
    expect(screen.getByTestId('auth-status').textContent).toBe('not-authenticated');
    expect(localStorage.getItem('reflecto_auth')).toBeNull();
  });
});