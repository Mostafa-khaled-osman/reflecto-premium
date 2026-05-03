import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeView from '../pages/HomeView';
import PricingView from '../pages/PricingView';
import BranchesView from '../pages/Branches';
import DashboardView from '../pages/ClientDashboard';
import LoginView from '../pages/LoginView';
import OTPView from '../pages/OTPView';
import Contact from '../pages/Contact';
import { Ppf, Tint, PaintCorrection, DashCam, NanoCeramic } from '../pages/services';
import AdminOverview from '../pages/AdminOverview';
import AdminScheduling from '../pages/AdminScheduling';
import AdminClients from '../pages/AdminClients';
import AddClient from '../pages/AddClient';
import EditClient from '../pages/EditClient';
import EditPackage from '../pages/EditPackage';
import AddPackage from '../pages/AddPackage';
import AllServices from '../pages/services/AllServices';
import NotFound from '../error-page/notFound';
import ProtectedRoute from '../components/components/ProtectedRoute';
import PageTransition from '../components/components/PageTransition';
import OrdersBilling from '../pages/OrdersBilling';
import CommercialTinting from '../pages/services/CommercialTinting';
import Checkout from '../pages/Checkout';
import CheckoutStatus from '../pages/CheckoutStatus';

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
        <Route path="/branches" element={<AnimatedRoute><BranchesView /></AnimatedRoute>} />
        <Route path="/pricing" element={<AnimatedRoute><PricingView /></AnimatedRoute>} />
        <Route path="/Contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
        <Route path="/login" element={<AnimatedRoute><LoginView /></AnimatedRoute>} />
        <Route path="/otp" element={<AnimatedRoute><OTPView /></AnimatedRoute>} />
        <Route path="/clientDashboard" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="client">
              <DashboardView />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/all-services" element={<AnimatedRoute><AllServices /></AnimatedRoute>} />
        <Route path="/services/ppf" element={<AnimatedRoute><Ppf /></AnimatedRoute>} />
        <Route path="/services/window-tint" element={<AnimatedRoute><Tint /></AnimatedRoute>} />
        <Route path="/services/paint-correction" element={<AnimatedRoute><PaintCorrection /></AnimatedRoute>} />
        <Route path="/services/dash-cam" element={<AnimatedRoute><DashCam /></AnimatedRoute>} />
        <Route path="/services/nano-ceramic" element={<AnimatedRoute><NanoCeramic /></AnimatedRoute>} />
        <Route path="/services/commercial-tint" element={<AnimatedRoute><CommercialTinting /></AnimatedRoute>} />
        <Route path="/checkout" element={<AnimatedRoute><Checkout /></AnimatedRoute>} />
        <Route path="/checkout/success" element={<AnimatedRoute><CheckoutStatus status="success" /></AnimatedRoute>} />
        <Route path="/checkout/cancel" element={<AnimatedRoute><CheckoutStatus status="cancel" /></AnimatedRoute>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <AdminOverview />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/scheduling" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <AdminScheduling />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/clientsDashboard" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <AdminClients />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/add-client" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <AddClient />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/edit-client" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <EditClient />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/edit-package" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <EditPackage />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/add-package" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <AddPackage />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="/admin/billing" element={
          <AnimatedRoute>
            <ProtectedRoute requiredRole="admin">
              <OrdersBilling />
            </ProtectedRoute>
          </AnimatedRoute>
        } />
        <Route path="*" element={<AnimatedRoute><NotFound /></AnimatedRoute>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
