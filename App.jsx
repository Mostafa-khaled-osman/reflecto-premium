import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import AppRoutes from './src/routes/routes';
import ToastContainer from './src/components/ui/Toast';
import { useLanguage } from './src/hooks/useLanguage';

const App = () => {
  useLanguage();
  const location = useLocation();

  const isFullDashboard = location.pathname.startsWith('/admin');

  return (
    <div className={`min-h-screen flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden ${isFullDashboard ? 'pb-0' : ''}`}>
      <ToastContainer />
      <Navbar />
      <main className={`flex-grow ${!isFullDashboard ? 'pt-20' : ''}`}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;