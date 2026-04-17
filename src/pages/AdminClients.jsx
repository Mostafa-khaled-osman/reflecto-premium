import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import StatCard from '../components/admin/StatCard';
import ClientCard from '../components/admin/ClientCard';

// Dummy Data from the visual template
const clientsData = [
  {
    id: 1,
    name: 'Elena Rodriguez',
    role: 'Founding Partner',
    status: 'Active',
    isActiveStatus: true,
    company: 'Vanguard Creative',
    email: 'elena.r@vanguard.com',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0bnAv39O-K9Txbpa3DFLRncvRMexIe7a-UKn_FopkP3TrSfIrjCKvbl8-lRVczf-XyS-QHHiaxz3MD9ESigIt9DGLYNilgJ417WYbzmsyRQyzYwUJnMp0wb3aw1uy9RJKv1r7YaPJVKhY5E_PVeNWlW9MXyYwmZxx4axY6hULN8xCF02yb-w4kv4ZO9ujKQSi2GEgcOqJI7WIZHdCfPCrI0VuTsumtjoZnTUm6nt_Q_fu8xzh1LUzRhYqtY6cRs7DxJIhR_cZOrl2',
    gradientColorClass: 'from-[#ffb4a7]'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Chief Operations',
    status: 'Active',
    isActiveStatus: true,
    company: 'Thorne & Co',
    email: 'm.thorne@thorne.io',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs0CRbBq5W7ckhoUiFyHONwIWluh381_ye3irBAT7JmiT7KDpRPEa6bVU8w3gZVZUC9S3Mgq7nusDf2AOF_ydo_nCFFAOYFrFlDUxU5jwZ5JMYDsL3L0bKMA7MLkD4bfBVLo0sD_tubEFuB8IXtvbcb_ZzawpOoXVap2QW3_1CL5ZoqCvdikaXK3-CfpXocgMx6yMltnf7J9OF5m3fpy37dAVWSW3wnyNk_FRvz0qMj_YR-4HbsZFS1Wc2N_mS4Zs3TWTZbjd4AVZn',
    gradientColorClass: 'from-[#5a0500]'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'VP Development',
    status: 'Inactive',
    isActiveStatus: false,
    company: 'Blue Arch Tech',
    email: 'jenkins@bluearch.com',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2J2YGPBq1N97TcbIr27Z8xSmfVF5GYjGLyzLDF1oazKHULPqUeYxijzDZa6NRw9LTbyHTRSdEOleUDBTp5__JZim7-in44UhnnCMAtwxmJZCIl4z52jZAeRDS5RB7GAokdhTKyzmQqeH20dEMblrcGbJ4NvVX_bcYq7SN7IGHBIahdgYyHdhWQYtbzJ9h3EMLu38oPH8T9J7Ida0ttopQsdEjhVAkEmYvQHEf65vgHU61LyEqOLlUyZz4yQBJ88k7HMPUN-J-V-8L',
    gradientColorClass: null
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Lead Architect',
    status: 'Active',
    isActiveStatus: true,
    company: 'Nexus Structures',
    email: 'd.chen@nexus.build',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM2dvBcMwpaHNHvIiHPjvY-NzPQRx5gdxhMQnwNCuzM1oA7FQ_aNiVQeXgg_yMV_0U5RhMEBv-YeEylJNCvbtlJVO-A3rXlOehlzp8c5G-O7yjjAuvmcIJTEzRL_GXaW5RhO2x3fs3wREn906TFYwwqQ46A8oX6h6ZGr7XDvkOkG5hRXDKXoO8tMETqwpE45QEqUexS2tK_U7pSuC_PCtfrC1VmpdIblWuwXrc-os5_CDxrK6EZ4zPq3-sa1i3GKQuxCDRDx9BA977',
    gradientColorClass: 'from-[#ffb4ab]'
  }
];

const AdminClients = () => {
  const [viewMode, setViewMode] = useState('grid');
  const { t } = useTranslation(['admin_clients']);
  const navigate = useNavigate();

  return (
    <div className="flex bg-[#131313] min-h-[calc(100vh-5rem)] font-body text-[#e5e2e1] selection:bg-[#c8c6c6] relative mt-16 md:mt-0">
      
      {/* Existing Sidebar Integration */}
      <AdminSidebar />
      
      {/* Content Area */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-8 space-y-8 w-full max-w-7xl mx-auto">
        
        {/* Hero / Header Section */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-transparent">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-[#ffb4a7] leading-tight">
              Client Registry
            </h2>
            <p className="mt-4 text-[#e3beb8] font-body text-lg max-w-lg leading-relaxed">
              Manage your elite network of partners and subscribers with editorial precision.
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-6 py-3 rounded-xl bg-[#353534] text-[#ffb4a7] font-bold font-headline text-sm hover:bg-[#2a2a2a] transition-colors whitespace-nowrap">
              Export CSV
            </button>
            <button 
              onClick={() => navigate('/admin/add-client')}
              className="px-6 py-3 rounded-xl ink-pool-gradient text-white font-bold font-headline text-sm shadow-xl shadow-[#ffb4a7]/20 flex items-center gap-2 active:scale-95 transition-transform whitespace-nowrap"
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
            value="1,284"
            icon="trending_up"
            trendText="+12% from last month"
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
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="bg-[#0e0e0e] px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 border border-[#5b403c]/10">
              <span className="material-symbols-outlined text-lg" data-icon="filter_list">
                filter_list
              </span>
              Filters
            </button>
            <div className="h-6 w-[1px] bg-[#5b403c]/30"></div>
            <p className="text-sm text-[#e3beb8]">
              Showing <span className="font-bold text-[#ffb4a7]">24</span> clients
            </p>
          </div>
          <div className="flex bg-[#201f1f] rounded-lg p-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-[#0e0e0e] text-[#ffb4a7] shadow-sm' : 'text-[#e3beb8] hover:text-[#ffb4a7] transition-colors'}`}
            >
              <span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-[#0e0e0e] text-[#ffb4a7] shadow-sm' : 'text-[#e3beb8] hover:text-[#ffb4a7] transition-colors'}`}
            >
              <span className="material-symbols-outlined" data-icon="list">list</span>
            </button>
          </div>
        </section>

        {/* Client Grid */}
        <section className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
          {clientsData.map((client) => (
            <ClientCard key={client.id} {...client} />
          ))}
        </section>

        {/* Pagination Container */}
        <footer className="flex flex-col sm:flex-row items-center justify-between pt-12 pb-12 gap-4">
          <p className="text-xs text-[#e3beb8] font-medium">Page 1 of 12</p>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#5b403c]/10 text-[#e3beb8] hover:bg-[#0e0e0e] transition-all">
              <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#ffb4a7] text-black font-bold text-sm shadow-lg shadow-[#ffb4a7]/20">1</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#0e0e0e] text-[#e3beb8] text-sm font-bold transition-all">2</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#0e0e0e] text-[#e3beb8] text-sm font-bold transition-all">3</button>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#5b403c]/10 text-[#e3beb8] hover:bg-[#0e0e0e] transition-all">
              <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default AdminClients;
