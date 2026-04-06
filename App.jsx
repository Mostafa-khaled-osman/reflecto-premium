import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import AppRoutes from './src/routes/routes';
import { useLanguage } from './src/hooks/useLanguage';
import { useAuth } from './src/contexts/AuthContext';

const App = () => {
  useLanguage();
  const location = useLocation();
  const { login } = useAuth();

  const handleLoginSubmit = (phone) => {
    login(phone);
  };

  const isFullDashboard = location.pathname.startsWith('/admin');

  return (
    <div className={`min-h-screen flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden ${isFullDashboard ? 'pb-0' : ''}`}>
      <Navbar />
      <main className={`flex-grow ${!isFullDashboard ? 'pt-20' : ''}`}>
        <AppRoutes onLoginSubmit={handleLoginSubmit} />
      </main>
      <Footer />
    </div>
  );
};

export default App;