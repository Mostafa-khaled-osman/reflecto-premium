/**
 * @typedef {Object} ProtectedRouteProps
 * @property {React.ReactNode} children
 * @property {string} [requiredRole] - e.g. "admin" or "client"
 */

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

/**
 * @param {ProtectedRouteProps} props
 */
const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#FF5C35] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // If the user doesn't have the required role, redirect them to their respective dashboard
    if (user?.role === 'admin') {
      return <Navigate to="/admin" replace />;
    } else {
      return <Navigate to="/clientDashboard" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;