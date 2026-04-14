import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation(['common', 'services', 'all_services']);
  const { language, toggleLanguage, isRTL } = useLanguage();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowDropdown(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const NavLink = ({ label, path }) => (
    <Link
      to={path}
      onClick={closeMenus}
      className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-[#FF5C35] ${location.pathname === path ? 'text-[#FF5C35]' : 'text-gray-400'}`}
    >
      {label}
    </Link>
  );

  const LangToggle = ({ className = "" }) => (
    <button
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      className={`flex items-center gap-2 px-2 py-1.5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-400 hover:text-white hover:border-[#FF5C35]/50 transition-all uppercase tracking-widest ${className}  `}
    >
      {/* <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg> */}
      {language === 'en' ? 'Arabic' : 'English'}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/5 h-20" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-2 cursor-pointer group z-50"
            aria-label="Reflecto Home"
          >
            {/* <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-[#FF5C35]/20 transition-colors">
              <img src="/assets/photo/logo.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
            </div> */}
            <span className="text-xl font-bold tracking-tight text-[#FF5C35]">Reflecto</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center gap-8" role="menubar">
          <NavLink label={t('common:nav_home')} path="/" />
          <NavLink label={t('common:nav_pricing')} path="/pricing" />

          <div className="relative" ref={dropdownRef} role="menuitem">
            <button
              onMouseEnter={() => setShowDropdown(true)}
              onFocus={() => setShowDropdown(true)}
              aria-expanded={showDropdown}
              aria-haspopup="true"
              className="text-sm font-medium text-gray-400 hover:text-[#FF5C35] flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              {t('common:nav_services')}
              <svg className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </button>

            <div
              role="menu"
              aria-orientation="vertical"
              className={`absolute top-full ${isRTL ? 'right-0' : 'left-1/2 -translate-x-1/2'} mt-2 w-48 bg-[#262626] border border-white/10 rounded-xl shadow-2xl py-2 transition-all duration-200 z-50 ${showDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
            >
              {[
                { label: t('all_services:cta_services', 'All Services'), path: '/all-services' },
                { label: t('services:ppf_title'), path: '/services/ppf' },
                { label: t('services:window_tinting_title'), path: '/services/window-tint' },
                { label: t('services:paint_correction_title'), path: '/services/paint-correction' },
                { label: t('services:nano_ceramic_title'), path: '/services/nano-ceramic' },
                { label: t('services:dash_cam_title'), path: '/services/dash-cam' }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  role="menuitem"
                  onClick={closeMenus}
                  className="block w-full text-left px-4 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-[#FF5C35]/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink label={t('common:nav_contact')} path="/Contact" />
          <NavLink label={t('common:nav_branches', 'Branches')} path="/Branches" />
          <NavLink label={t('common:nav_dashboard')} path="/admin" />
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <LangToggle />
          <Link
            to="/ClientDashboard"
            className="px-2 py-2 border border-[#FF5C35] text-[#FF5C35] font-bold text-bold rounded hover:bg-[#FF5C35] hover:text-white transition-all shadow-lg shadow-[#FF5C35]/10 whitespace-nowrap flex items-center gap-1">
            {t('common:nav_dashboard')}
            <img src="/assets/icons/profileIcon.png" alt="" className="w-6 h-6 d-inline-block" />
          </Link>
        </div>

        <div className="md:hidden flex-1 flex justify-end items-center gap-3 z-50">
          <LangToggle className="px-2 py-1" />
          <Link
            to="/ClientDashboard"
            className="px-2 py-1.5 border border-[#FF5C35] text-[#FF5C35] font-bold text-[13px] rounded hover:bg-[#FF5C35] hover:text-white transition-all w-[110px] flex items-center gap-1">
            {t('common:nav_dashboard')}
            <img src="/assets/icons/profileIcon.png" alt="" className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={(e) => e.key === 'Escape' && setIsMobileMenuOpen(false)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="text-white py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5C35] rounded"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`md:hidden absolute top-20 left-0 right-0 bg-[#1a1a1a] border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-6 gap-4">
          <Link to="/" onClick={closeMenus} className={`text-left text-lg font-medium ${location.pathname === '/' ? 'text-[#FF5C35]' : 'text-white'}`}>{t('common:nav_home')}</Link>
          <Link to="/pricing" onClick={closeMenus} className={`text-left text-lg font-medium ${location.pathname === '/pricing' ? 'text-[#FF5C35]' : 'text-white'}`}>{t('common:nav_pricing')}</Link>

          <div className="border-y border-white/5 py-4 my-2 flex flex-col gap-3 ">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest  " >{t('common:nav_services')}</span>
            {[
              { label: t('all_services:cta_services', 'All Services'), path: '/all-services' },
              { label: t('services:ppf_title'), path: '/services/ppf' },
              { label: t('services:window_tinting_title'), path: '/services/window-tint' },
              { label: t('services:paint_correction_title'), path: '/services/paint-correction' },
              { label: t('services:nano_ceramic_title'), path: '/services/nano-ceramic' },
              { label: t('services:dash_cam_title'), path: '/services/dash-cam' }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={closeMenus}
                className="text-left text-gray-300 font-medium pl-4 "
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/Contact" onClick={closeMenus} className="text-left text-lg font-medium text-white mb-4">{t('common:nav_contact')}</Link>
          <Link to="/Branches" onClick={closeMenus} className="text-left text-lg font-medium text-white mb-4">{t('common:nav_branches', 'Branches')}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;