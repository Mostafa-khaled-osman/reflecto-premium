
import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import PricingView from './views/PricingView';
import DashboardView from './views/DashboardView';
import LoginView from './views/LoginView';
import OTPView from './views/OTPView';
import Contact from './views/Contact';
import Service1View from './views/Service1View';
import Service2View from './views/Service2View';
import Service3View from './views/Service3View';
import Service4View from './views/Service4View';
import Service5View from './views/Service5View';
import AdminOverview from './views/AdminOverview';
import AdminScheduling from './views/AdminScheduling';
import AdminClients from './views/AdminClients';

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
