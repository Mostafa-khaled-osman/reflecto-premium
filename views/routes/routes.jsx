import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeView from '../pages/HomeView';
import PricingView from '../pages/PricingView';
import DashboardView from '../pages/DashboardView';
import LoginView from '../pages/LoginView';
import OTPView from '../pages/OTPView';
import Contact from '../pages/Contact';
import { Ppf, Tint, PaintCorrection, DashCam, NanoCeramic } from '../pages/services';
import AdminOverview from '../pages/AdminOverview';
import AdminScheduling from '../pages/AdminScheduling';
import AdminClients from '../pages/AdminClients';
import NotFound from '../error-page/notFound';
import ProtectedRoute from '../../components/ProtectedRoute';
import PageTransition from '../../components/PageTransition';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.4,
};

const AnimatedRoute = ({ children }) => {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedRoute><HomeView /></AnimatedRoute>} />
        <Route path="/pricing" element={<AnimatedRoute><PricingView /></AnimatedRoute>} />
        <Route path="/Contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
        <Route path="/login" element={<AnimatedRoute><LoginView /></AnimatedRoute>} />
        <Route path="/otp" element={<AnimatedRoute><OTPView /></AnimatedRoute>} />
        <Route path="/dashboard" element={<AnimatedRoute><DashboardView /></AnimatedRoute>} />
        <Route path="/services/ppf" element={<AnimatedRoute><Ppf /></AnimatedRoute>} />
        <Route path="/services/window-tint" element={<AnimatedRoute><Tint /></AnimatedRoute>} />
        <Route path="/services/paint-correction" element={<AnimatedRoute><PaintCorrection /></AnimatedRoute>} />
        <Route path="/services/dash-cam" element={<AnimatedRoute><DashCam /></AnimatedRoute>} />
        <Route path="/services/nano-ceramic" element={<AnimatedRoute><NanoCeramic /></AnimatedRoute>} />
        <Route path="/admin" element={
          <AnimatedRoute>
            <ProtectedRoute>
              <AdminOverview />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/scheduling" element={
          <AnimatedRoute>
            <ProtectedRoute>
              <AdminScheduling />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/clients" element={
          <AnimatedRoute>
            <AdminClients />
          </AnimatedRoute>
        } />
        <Route path="*" element={<AnimatedRoute><NotFound /></AnimatedRoute>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
