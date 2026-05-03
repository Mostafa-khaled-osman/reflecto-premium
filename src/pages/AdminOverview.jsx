import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { adminService, clientService } from '../services/api';
import AdminSidebar from '../components/AdminSidebar';

const AdminOverview = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: overview, isLoading } = useQuery({
    queryKey: ['adminOverview'],
    queryFn: adminService.getOverview,
  });

  // Search logic (optional: could debounce and use useQuery)
  const handleSearch = async (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // In a real app, this would route to a search results page or update a local state
      console.log('Searching for:', searchQuery);
      try {
        const res = await clientService.search(searchQuery);
        console.log('Search results:', res);
        // Could open a modal or navigate to /admin/clients?q=...
      } catch (err) {
        console.error(err);
      }
    }
  };

  const stats = overview?.stats || { total_revenue: 0, active_jobs: 0 };
  const shopSnapshot = overview?.shop_snapshot || { contacts_today: 0, bay_capacity: { occupied: 0, total: 10 } };
  const recentAppointments = overview?.recent_appointments || [];

  const bayPercent = shopSnapshot.bay_capacity.total > 0 
    ? Math.round((shopSnapshot.bay_capacity.occupied / shopSnapshot.bay_capacity.total) * 100) 
    : 0;

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden pt-20 ">
      <AdminSidebar />

      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pl-12 lg:pl-0 mt-4 lg:mt-0 shrink-0">
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Dashboard / Overview</div>
            <h1 className="text-3xl font-display font-bold">Overview</h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <div className="relative shrink-0">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <input
                type="text"
                placeholder="Search client, ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-6 py-3 text-sm w-48 sm:w-80 focus:outline-none focus:border-[#FF5C35] transition-all"
              />
            </div>
            <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-white transition-all relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF5C35] rounded-full"></span>
            </button>
            <Link
              to="/admin/add-package"
              className="px-6 py-3 shrink-0 bg-[#FF5C35] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              <span className="hidden sm:inline">New package</span>
            </Link>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[380px] rounded-xl overflow-hidden relative shadow-2xl shrink-0 mt-2">
          <img alt="Main Car Hero" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1200" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <div className="text-white">
              <h2 className="text-4xl font-display font-bold mb-2">SAR {stats.total_revenue.toLocaleString()}</h2>
              <p className="text-gray-300 tracking-widest text-sm uppercase">Total Revenue (This Month)</p>
            </div>
          </div>
        </div>

        {/* Client Data Table Section */}
        <section className="bg-[#222222] rounded-xl p-6 border border-[#333333] flex-1 flex flex-col min-h-[400px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-white text-lg font-semibold tracking-wide flex items-center gap-2">
              RECENT APPOINTMENTS
              {isLoading && <div className="w-4 h-4 border-2 border-[#FF5C35] border-t-transparent rounded-full animate-spin"></div>}
            </h2>
            <Link to="/clientsDashboard" className="text-xs font-semibold text-gray-400 hover:text-white transition-colors uppercase">
              View All Clients →
            </Link>
          </div>

          <div className="w-full flex-1 flex flex-col overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 text-[#a0a0a0] text-xs font-semibold tracking-wider pb-3 border-b border-[#333333] mb-3">
                <div className="col-span-3">CLIENT</div>
                <div className="col-span-3">VEHICLE</div>
                <div className="col-span-3">SERVICE</div>
                <div className="col-span-2">STATUS</div>
                <div className="col-span-1 text-right">ACTION</div>
              </div>

              {/* Table Body Rows */}
              <div className="flex flex-col gap-2">
                {recentAppointments.length === 0 && !isLoading && (
                  <div className="text-center py-10 text-gray-500 italic">No recent appointments found.</div>
                )}

                {recentAppointments.map((apt, idx) => (
                  <div key={apt.id || idx} className={`grid grid-cols-12 gap-4 items-center ${apt.status === 'in_progress' ? 'bg-[#ff4d4d]/10 border-[#ff4d4d]/30' : 'bg-[#141414] border-[#333333]'} border rounded-lg p-3 hover:bg-gray-800 transition-colors`}>
                    <div className="col-span-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
                        {apt.client_name?.charAt(0) || '?'}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-sm font-medium">{apt.client_name || 'Unknown'}</span>
                        <span className="text-[10px] text-gray-500">{apt.client_phone}</span>
                      </div>
                    </div>
                    <div className="col-span-3 text-gray-300 text-sm">{apt.vehicle || 'Not specified'}</div>
                    <div className="col-span-3 text-gray-300 text-sm flex items-center gap-2">
                      {apt.service_name || 'Standard Service'}
                      {apt.is_premium && <svg className="w-3 h-3 text-[#ff4d4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>}
                    </div>
                    <div className="col-span-2">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                        apt.status === 'in_progress' ? 'bg-[#ff4d4d]/20 text-[#ff4d4d]' : 
                        apt.status === 'completed' ? 'bg-emerald-500/20 text-emerald-500' : 
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {apt.status ? apt.status.replace('_', ' ') : 'Pending'}
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      <Link to={`/admin/edit-client?id=${apt.client_id}`} className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-full xl:w-[360px] flex-shrink-0 border-t xl:border-t-0 xl:border-l border-[#333333] bg-[#141414] overflow-y-auto p-4 flex flex-col gap-4">

        {/* Analytics Dial Section */}
        <section className="bg-[#222222] rounded-xl p-5 border border-[#333333] flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff4d4d]"></div>
              <div>
                <div className="text-white text-xs font-semibold">Active Jobs</div>
                <div className="text-[10px] text-gray-500">{stats.active_jobs} cars</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div>
                <div className="text-white text-xs font-semibold">New Leads</div>
                <div className="text-[10px] text-gray-500">{shopSnapshot.contacts_today} contacts today</div>
              </div>
            </div>
          </div>

          <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
              <path className="text-[#333333]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${bayPercent}, 100`} strokeWidth="3"></path>
              <path className="text-[#ff4d4d]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${Math.max(0, bayPercent - 15)}, 100`} strokeWidth="3"></path>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-light text-white">{bayPercent}<span className="text-sm text-gray-400">%</span></span>
              <span className="text-[8px] text-gray-500 tracking-widest uppercase">Bay Capacity</span>
            </div>
          </div>
        </section>

        {/* Active Analytics Map */}
        <section className="bg-[#222222] rounded-xl p-5 border border-[#333333]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-sm font-semibold tracking-wider">ACTIVE ANALYTICS</h2>
            <span className="text-[#a0a0a0] cursor-pointer hover:text-white">...</span>
          </div>
          <div className="w-full h-40 bg-[#141414] rounded-lg flex items-center justify-center relative overflow-hidden border border-[#333333]">
            <img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" alt="Map" />
            <div className="absolute w-2 h-2 bg-[#ff4d4d] rounded-full top-[30%] left-[25%] shadow-[0_0_10px_rgba(255,77,77,0.8)]"></div>
            <div className="absolute w-2 h-2 bg-[#ff4d4d] rounded-full top-[40%] left-[45%] shadow-[0_0_10px_rgba(255,77,77,0.8)]"></div>
            <div className="absolute w-2 h-2 bg-[#ff4d4d] rounded-full top-[25%] left-[75%] shadow-[0_0_10px_rgba(255,77,77,0.8)]"></div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-[#222222] rounded-xl p-5 border border-[#333333] flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-sm font-semibold tracking-wider">QUICK ACTIONS</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1 min-h-[160px]">
             <Link to="/admin/add-client" className="bg-[#141414] rounded-lg border border-[#333333] flex flex-col items-center justify-center gap-2 hover:bg-white/5 hover:border-[#FF5C35]/50 transition-all group">
                <div className="w-10 h-10 rounded-full bg-[#FF5C35]/10 flex items-center justify-center text-[#FF5C35] group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                </div>
                <span className="text-xs text-gray-300 font-medium">Add Client</span>
             </Link>

             <Link to="/admin/scheduling" className="bg-[#141414] rounded-lg border border-[#333333] flex flex-col items-center justify-center gap-2 hover:bg-white/5 hover:border-[#FF5C35]/50 transition-all group">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </div>
                <span className="text-xs text-gray-300 font-medium">Scheduling</span>
             </Link>
          </div>
        </section>

      </aside>
    </div>
  );
};

export default AdminOverview;
