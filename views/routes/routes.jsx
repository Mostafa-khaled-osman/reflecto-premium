import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/pricing" element={<PricingView />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/otp" element={<OTPView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/services/thermal-defense" element={<Ppf />} />
      <Route path="/services/window-tint" element={<Tint />} />
      <Route path="/services/paint-correction" element={<PaintCorrection />} />
      <Route path="/services/dash-cam" element={<DashCam />} />
      <Route path="/services/advanced-insulation" element={<NanoCeramic />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminOverview />
        </ProtectedRoute>
      } />
      <Route path="/admin/scheduling" element={
        <ProtectedRoute>
          <AdminScheduling />
        </ProtectedRoute>
      } />
      <Route path="/admin/clients" element={
        // <ProtectedRoute>
          <AdminClients />
        // </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;