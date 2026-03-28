
import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';
import HomeView from './views/pages/HomeView';
import PricingView from './views/pages/PricingView';
import DashboardView from './views/pages/DashboardView';
import LoginView from './views/pages/LoginView';
import OTPView from './views/pages/OTPView';
import Contact from './views/pages/Contact';
import Service1View from './views/pages/Service1View';
import Service2View from './views/pages/Service2View';
import Service3View from './views/pages/Service3View';
import Service4View from './views/pages/Service4View';
import Service5View from './views/pages/Service5View';
import AdminOverview from './views/pages/AdminOverview';
import AdminScheduling from './views/pages/AdminScheduling';
import AdminClients from './views/pages/AdminClients';

const App = () => {
  const [userPhone, setUserPhone] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSubmit = (phone) => {
    setUserPhone(phone);
    navigate('/otp');
  };

  const handleOTPSubmit = () => {
    navigate('/admin');
  };

  const isFullDashboard = location.pathname.startsWith('/admin');

  return (
    <div className={`min-h-screen flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden ${isFullDashboard ? 'pb-0' : ''}`}>
      <Navbar />
      {/* {!isFullDashboard && <Navbar />} */}
      <main className={`flex-grow ${!isFullDashboard ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/pricing" element={<PricingView />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<LoginView onSubmit={handleLoginSubmit} />} />
          <Route path="/otp" element={<OTPView phone={userPhone} onSubmit={handleOTPSubmit} onBack={() => navigate('/login')} />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/services/thermal-defense" element={<Service1View />} />
          <Route path="/services/window-tint" element={<Service2View />} />
          <Route path="/services/paint-correction" element={<Service3View />} />
          <Route path="/services/dash-cam" element={<Service4View />} />
          <Route path="/services/advanced-insulation" element={<Service5View />} />
          <Route path="/admin" element={<AdminOverview />} />
          <Route path="/admin/scheduling" element={<AdminScheduling />} />
          <Route path="/admin/clients" element={<AdminClients />} />
        </Routes>
      </main>
      <Footer />
      {/* {!isFullDashboard && <Footer />} */}
    </div>
  );
};

export default App;
