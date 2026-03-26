import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-start">
          <div
            className="flex items-center gap-2 cursor-pointer group z-50"
            onClick={() => handleNav('/')}
          >
            <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#FF5C35]/20 transition-colors">
              <img src="/photo/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#FF5C35]">Reflecto</span>
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          <button onClick={() => navigate('/')} className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-[#FF5C35] ${location.pathname === '/' ? 'text-[#FF5C35]' : 'text-gray-400'}`}>Home</button>
          <button onClick={() => navigate('/pricing')} className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-[#FF5C35] ${location.pathname === '/pricing' ? 'text-[#FF5C35]' : 'text-gray-400'}`}>Pricing</button>

          <div className="relative group">
            <button
              onMouseEnter={() => setShowDropdown(true)}
              className="text-sm font-medium text-gray-400 hover:text-[#FF5C35] flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </button>

            <div
              onMouseLeave={() => setShowDropdown(false)}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#262626] border border-white/10 rounded-xl shadow-2xl py-2 transition-all duration-200 ${showDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
            >
              {[
                { label: 'Thermal Defense', path: '/services/thermal-defense' },
                { label: 'Window Tint', path: '/services/window-tint' },
                { label: 'Paint Correction', path: '/services/paint-correction' },
                { label: 'Dash Cam', path: '/services/dash-cam' },
                { label: 'Advanced Insulation', path: '/services/advanced-insulation' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.path)}
                  className="w-full text-left px-4 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-[#FF5C35]/10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => navigate('/Contact')} className="whitespace-nowrap text-sm font-medium text-gray-400 hover:text-[#FF5C35] transition-colors">Contact</button>
        </div>

        {/* Right Side: Desktop Dashboard Button */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <button
            onClick={() => navigate('/admin/clients')}
            className="px-6 py-2 border border-[#FF5C35] text-[#FF5C35] font-bold text-sm rounded hover:bg-[#FF5C35] hover:text-white transition-all shadow-lg shadow-[#FF5C35]/10 whitespace-nowrap">
            Dashboard
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex-1 flex justify-end items-center gap-4 z-50">
          <button
            onClick={() => handleNav('/admin/clients')}
            className="px-4 py-1.5 border border-[#FF5C35] text-[#FF5C35] font-bold text-xs rounded hover:bg-[#FF5C35] hover:text-white transition-all">
            Dashboard
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 right-0 bg-[#1a1a1a] border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          <button onClick={() => handleNav('/')} className={`text-left text-lg font-medium ${location.pathname === '/' ? 'text-[#FF5C35]' : 'text-white'}`}>Home</button>
          <button onClick={() => handleNav('/pricing')} className={`text-left text-lg font-medium ${location.pathname === '/pricing' ? 'text-[#FF5C35]' : 'text-white'}`}>Pricing</button>

          <div className="border-y border-white/5 py-4 my-2 flex flex-col gap-3">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Services</span>
            {[
              { label: 'Thermal Defense', path: '/services/thermal-defense' },
              { label: 'Window Tint', path: '/services/window-tint' },
              { label: 'Paint Correction', path: '/services/paint-correction' },
              { label: 'Dash Cam', path: '/services/dash-cam' },
              { label: 'Advanced Insulation', path: '/services/advanced-insulation' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.path)}
                className="text-left text-gray-300 font-medium pl-4"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => handleNav('/Contact')} className="text-left text-lg font-medium text-white mb-4">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
