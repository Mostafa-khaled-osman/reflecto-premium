import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: 'grid', path: '/admin' },
    { label: 'Clients', icon: 'users', path: '/admin/clients' },
    { label: 'Scheduling', icon: 'calendar', path: '/admin/scheduling' },
    { label: 'Work Gallery', icon: 'image', path: '/' },
  ];

  const insights = [
    { label: 'Analytics', icon: 'pie-chart' },
    { label: 'Locations', icon: 'map' },
    { label: 'Settings', icon: 'settings' },
  ];

  return (
    <>
      {/* Mobile Toggle Button (Visible only on small screens) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-40 p-2 bg-[#1a1a1a] rounded-lg border border-white/10 text-white shadow-xl"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <div className={`w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col h-screen fixed left-0 top-0 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-8 pb-12 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              Reflecto<span className="text-[#FF5C35]">.</span>
            </span>
          </div>
          {/* Close button for mobile inside sidebar */}
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-gray-500 hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className="flex-grow px-4 space-y-10 overflow-y-auto">
          <div>
            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-4 mb-4">Main Menu</div>
            <div className="space-y-1">
              {menuItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => { navigate(item.path); setIsOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${location.pathname === item.path ? 'bg-[#FF5C35]/10 text-[#FF5C35]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {item.icon === 'grid' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
                    {item.icon === 'users' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="2"/></svg>}
                    {item.icon === 'calendar' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
                    {item.icon === 'image' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>}
                  </div>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-4 mb-4">Insights</div>
            <div className="space-y-1">
              {insights.map(item => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-gray-500 hover:text-white hover:bg-white/5"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {item.icon === 'pie-chart' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>}
                    {item.icon === 'map' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>}
                    {item.icon === 'settings' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>}
                  </div>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 mt-auto">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
            <img src="https://i.pravatar.cc/150?u=alexmercer" className="w-10 h-10 rounded-full object-cover" alt="Alex Mercer" />
            <div className="overflow-hidden">
              <div className="text-sm font-bold truncate">Alex Mercer</div>
              <div className="text-[10px] text-gray-500 truncate">Admin Manager</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
