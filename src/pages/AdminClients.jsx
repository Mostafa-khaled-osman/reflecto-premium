import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { clientService } from '../services/api';
import AdminSidebar from '../components/AdminSidebar';
import StatCard from '../components/admin/StatCard';
import ClientCard from '../components/admin/ClientCard';

const AdminClients = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [page, setPage] = useState(1);
  const { t } = useTranslation(['admin_clients']);
  const navigate = useNavigate();

  // Fetch clients from backend
  const { data: clientsData, isLoading } = useQuery({
    queryKey: ['adminClients', page],
    queryFn: () => clientService.getAll(page),
    keepPreviousData: true,
  });

  // Extract pagination info if returned by API, otherwise fallback to standard values
  const clients = Array.isArray(clientsData) ? clientsData : (clientsData?.data || []);
  const totalPages = clientsData?.meta?.last_page || 1;
  const totalClients = clientsData?.meta?.total || clients.length;

  // Fallback to static dummy data if API returns an empty array for now (to keep UI looking good during dev)
  const dummyData = [
    { id: 1, name: 'Elena Rodriguez', role: 'Premium Client', status: 'Active', isActiveStatus: true, company: 'Porsche 911', email: '+966501112222', gradientColorClass: 'from-[#ffb4a7]' },
    { id: 2, name: 'Marcus Thorne', role: 'VIP Subscriber', status: 'Active', isActiveStatus: true, company: 'Mercedes S-Class', email: '+966502223333', gradientColorClass: 'from-[#5a0500]' },
    { id: 3, name: 'Sarah Jenkins', role: 'Standard Client', status: 'Inactive', isActiveStatus: false, company: 'BMW X5', email: '+966503334444', gradientColorClass: null },
    { id: 4, name: 'David Chen', role: 'Loyal Customer', status: 'Active', isActiveStatus: true, company: 'Audi RS7', email: '+966504445555', gradientColorClass: 'from-[#ffb4ab]' }
  ];

  const displayClients = clients.length > 0 ? clients.map(c => ({
    id: c.id,
    name: c.full_name || 'Unknown',
    role: c.role === 'admin' ? 'Administrator' : 'Client',
    status: c.is_active ? 'Active' : 'Inactive',
    isActiveStatus: c.is_active !== false, // Default to true if undefined
    company: c.car_brand ? `${c.car_brand} ${c.car_model || ''}` : 'No Vehicle',
    email: c.phone || c.email || 'N/A',
    avatarUrl: null,
    gradientColorClass: 'from-[#FF5C35]'
  })) : dummyData;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="flex bg-[#0a0a0a] min-h-[calc(100vh-5rem)] font-body text-[#e5e2e1] selection:bg-[#c8c6c6] relative mt-16 md:mt-0">
      
      <AdminSidebar />
      
      {/* Content Area */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-8 w-full max-w-7xl mx-auto">
        
        {/* Hero / Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-[#FF5C35] leading-tight flex items-center gap-4">
              Client Registry
              {isLoading && <div className="w-5 h-5 border-2 border-[#FF5C35] border-t-transparent rounded-full animate-spin"></div>}
            </h2>
            <p className="mt-4 text-gray-400 font-body text-lg max-w-lg leading-relaxed">
              Manage your elite network of partners and subscribers with editorial precision.
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-bold text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
              Export CSV
            </button>
            <button 
              onClick={() => navigate('/admin/add-client')}
              className="px-6 py-3 rounded-xl bg-[#FF5C35] text-white font-bold text-sm shadow-xl shadow-[#FF5C35]/20 flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-sm" data-icon="person_add" style={{ fontVariationSettings: "'FILL' 1" }}>
                person_add
              </span>
              New Client
            </button>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <StatCard
            title="Active Portfolios"
            value={totalClients.toString()}
            icon="group"
            trendText="Total registered clients"
          />
          <StatCard
            title="Average LTV"
            value="$14.2k"
            icon="verified"
            trendText="Premium segment growth"
          />
          <StatCard
            isSpecial
            title="Service Excellence"
            description="98.2% client retention rate over the last fiscal quarter."
            icon="workspace_premium"
          />
        </section>

        {/* Table / Grid Toggle & Filter */}
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-4">
            <button className="bg-[#1a1a1a] px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 border border-white/5 hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-lg" data-icon="filter_list">
                filter_list
              </span>
              Filters
            </button>
            <div className="h-6 w-[1px] bg-white/10"></div>
            <p className="text-sm text-gray-400">
              Showing <span className="font-bold text-white">{displayClients.length}</span> of <span className="font-bold text-white">{totalClients}</span> clients
            </p>
          </div>
          <div className="flex bg-[#1a1a1a] rounded-lg p-1 border border-white/5">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-[#FF5C35] text-white shadow-sm' : 'text-gray-400 hover:text-white transition-colors'}`}
            >
              <span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-[#FF5C35] text-white shadow-sm' : 'text-gray-400 hover:text-white transition-colors'}`}
            >
              <span className="material-symbols-outlined" data-icon="list">list</span>
            </button>
          </div>
        </section>

        {/* Client Grid */}
        <section className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
          {displayClients.map((client) => (
            <ClientCard key={client.id} {...client} />
          ))}
        </section>

        {/* Pagination Container */}
        {totalPages > 1 && (
          <footer className="flex flex-col sm:flex-row items-center justify-between pt-12 pb-12 gap-4">
            <p className="text-xs text-gray-400 font-medium">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <button 
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/5 bg-[#1a1a1a] text-gray-300 hover:bg-white/10 transition-all disabled:opacity-50"
              >
                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              </button>
              
              {/* Pagination logic: showing +/- 1 page */}
              {[...Array(totalPages)].map((_, i) => {
                const p = i + 1;
                if (p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1)) {
                  return (
                    <button 
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all ${
                        p === page 
                          ? 'bg-[#FF5C35] text-white shadow-lg shadow-[#FF5C35]/20' 
                          : 'bg-[#1a1a1a] text-gray-300 border border-white/5 hover:bg-white/10'
                      }`}
                    >
                      {p}
                    </button>
                  );
                }
                if (p === page - 2 || p === page + 2) {
                  return <span key={p} className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>;
                }
                return null;
              })}

              <button 
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/5 bg-[#1a1a1a] text-gray-300 hover:bg-white/10 transition-all disabled:opacity-50"
              >
                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </footer>
        )}

      </main>
    </div>
  );
};

export default AdminClients;
