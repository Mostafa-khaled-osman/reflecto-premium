import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: 'grid', path: '/admin' },
    { label: 'Clients Management', icon: 'users', path: '/admin/clients' },
    { label: 'Scheduling & Calendar', icon: 'calendar', path: '/admin/scheduling' },
    { label: 'Services & Products', icon: 'box', path: '/admin/services' },
    { label: 'Orders & Billing', icon: 'credit-card', path: '/admin/billing' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-24 left-4 z-40 p-2 bg-[#1a1a1a] rounded-lg border border-white/10 text-white shadow-xl"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? <line x1="18" y1="6" x2="6" y2="18"/> : <line x1="3" y1="12" x2="21" y2="12"/> }
          {isOpen ? <line x1="6" y1="6" x2="18" y2="18"/> : <line x1="3" y1="6" x2="21" y2="6"/> }
          {!isOpen && <line x1="3" y1="18" x2="21" y2="18"/>}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <aside className={`w-[280px] bg-[#0a0a0a] border-b border-r mr-[20px] border-[#333333] flex flex-col h-[calc(100vh-5rem)] transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 overflow-y-auto`}>
        
        <div className="flex-grow px-4 py-8 space-y-8">
          <div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-4 mb-4">Main Menu</div>
            <nav className="space-y-2">
              {menuItems.map(item => {
                const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm border ${isActive ? 'bg-[#FF5C35]/10 text-[#FF5C35] border-[#FF5C35]/20 shadow-lg shadow-[#FF5C35]/5' : 'text-gray-400 border-transparent hover:text-white hover:bg-[#1a1a1a] hover:border-[#333333]'}`}
                  >
                    <div className={`w-5 h-5 flex items-center justify-center ${isActive ? 'text-[#FF5C35]' : 'text-gray-500'}`}>
                      {item.icon === 'grid' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
                      {item.icon === 'users' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><circle cx="19" cy="11" r="2"/></svg>}
                      {item.icon === 'calendar' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
                      {item.icon === 'box' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>}
                      {item.icon === 'credit-card' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>}
                    </div>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          
          <div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-4 mb-4">Settings</div>
            <nav className="space-y-2">
              <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-gray-400 border border-transparent hover:text-white hover:bg-[#1a1a1a] hover:border-[#333333]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                Preferences
              </Link>
            </nav>
          </div>
        </div>

        <div className="py-4 px-6 mt-auto border-t border-[#333333] bg-[#0a0a0a]">
          <div className="flex items-center gap-3 px-3 py-2 bg-[#1a1a1a] rounded-xl border border-[#333333] hover:border-gray-500 transition-colors cursor-pointer">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-9 h-9 rounded-full object-cover" alt="User Profile" />
            <div className="overflow-hidden flex-1">
              <div className="text-sm font-bold text-white truncate leading-tight">Masterio</div>
              <div className="text-[10px] text-gray-500 truncate">Administrator</div>
            </div>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
