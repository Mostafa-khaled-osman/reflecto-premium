import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const AdminOverview = () => {

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white">
      <AdminSidebar />

      <div className="flex-grow lg:pl-64 flex flex-col xl:flex-row">
        {/* Main Content */}
        <div className="flex-grow p-6 lg:p-10 border-b xl:border-b-0 xl:border-r border-white/5 w-full">
          {/* Header */}
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6 pl-12 lg:pl-0 mt-4 lg:mt-0">
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
                  className="bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-6 py-3 text-sm w-48 sm:w-80 focus:outline-none focus:border-[#FF5C35] transition-all"
                />
              </div>
              <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-white transition-all relative">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF5C35] rounded-full"></span>
              </button>
              <Link
                to="/Contact"
                className="px-6 py-3 shrink-0 bg-[#FF5C35] text-white font-bold rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                <span className="hidden sm:inline">New Contact</span>
                <span className="sm:hidden">New</span>
              </Link>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Revenue', value: '$124,500', trend: '+12.5% from last month', icon: 'dollar-sign' },
              { label: 'Active Jobs', value: '28', trend: '4 urgent priority', icon: 'briefcase' },
              { label: 'Scheduled', value: '14', trend: 'Next 7 days', icon: 'calendar' },
              { label: 'Client Satisfaction', value: '4.9/5.0', trend: 'Top tier rating', icon: 'star' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#141414] p-6 lg:p-8 rounded-2xl border border-white/5">
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-4">{stat.label}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-[10px] text-gray-400 flex items-center gap-1">
                  {i === 0 && <svg className="text-green-500 shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>}
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>

          {/* Work Gallery */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-display font-bold">Work Gallery</h3>
              <button className="text-[10px] font-bold text-[#FF5C35] uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Before: Swirl Marks', img: 'https://images.unsplash.com/photo-1552933529-e359b2477262?auto=format&fit=crop&q=80&w=600', badge: 'bg-black/60' },
                { label: 'After: Mirror Finish', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600', badge: 'bg-[#FF5C35]/80' }
              ].map((item, i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden aspect-video border border-white/5">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.label} />
                  <div className={`absolute bottom-6 left-6 px-4 py-2 rounded-lg text-[10px] font-bold backdrop-blur-md ${item.badge}`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Table Section */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-display font-bold">Client Data & Scheduling</h3>
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg></button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-white/5 text-gray-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg></button>
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-x-auto w-full">
              <table className="w-full text-left text-sm min-w-[800px]">
                <thead className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 bg-white/[0.02]">
                  <tr>
                    <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded bg-black border-white/10" /></th>
                    <th className="px-6 py-4">Client Name</th>
                    <th className="px-6 py-4">Vehicle</th>
                    <th className="px-6 py-4">Service Package</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { id: '2', name: 'James Wilson', vehicle: 'Audi RS7 Sportback', service: 'Paint Correction', date: 'Oct 22, 2026', status: 'In Progress', statusColor: 'bg-blue-500/10 text-blue-400', price: '1,450' },
                    { id: '2', name: 'James Wilson', vehicle: 'Audi RS7 Sportback', service: 'Paint Correction', date: 'Oct 22, 2026', status: 'Pending', statusColor: 'bg-yellow-500/10 text-yellow-400', price: '1,450' },
                    { id: '3', name: 'James Wilson', vehicle: 'Audi RS7 Sportback', service: 'Paint Correction', date: 'Oct 22, 2026', status: 'Completed', statusColor: 'bg-green-500/10 text-green-400', price: '1,450', active: true },
                  ].map((job, idx) => (
                    <tr key={idx} className={`group hover:bg-white/[0.02] transition-colors ${job.active ? 'bg-[#FF5C35]/10' : ''}`}>
                      <td className="px-6 py-6 text-gray-500 font-bold">{job.id}</td>
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-3">
                          <img src={`https://i.pravatar.cc/150?u=${job.name}`} className="w-8 h-8 rounded-full shrink-0" alt="" />
                          <div>
                            <div className="font-bold">{job.name}</div>
                            <div className="text-[10px] text-gray-600 block sm:hidden">xxxxxxxxxxxxxxx</div>
                          </div>
                          <span className="text-[10px] text-gray-600 hidden sm:inline">xxxxxxxxxxxxxxx</span>
                        </div>
                      </td>
                      <td className="px-6 py-6"><span className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium whitespace-nowrap">{job.vehicle}</span></td>
                      <td className="px-6 py-6"><span className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium whitespace-nowrap">{job.service}</span></td>
                      <td className="px-6 py-6"><span className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium whitespace-nowrap">{job.date}</span></td>
                      <td className="px-6 py-6"><span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${job.statusColor}`}>{job.status}</span></td>
                      <td className="px-6 py-6 font-bold">{job.price}</td>
                      <td className="px-6 py-6 text-gray-500">•••</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar Insights */}
        <div className="w-full xl:w-96 p-6 lg:p-10 space-y-12 shrink-0">
          {/* Active Analytics */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Active Analytics</h3>
              <button className="text-gray-500">•••</button>
            </div>

            <div className="relative flex justify-center py-10">
              <svg className="w-48 h-48 -rotate-90">
                <circle cx="96" cy="96" r="88" className="stroke-white/5" strokeWidth="12" fill="none" />
                <circle cx="96" cy="96" r="88" className="stroke-[#FF5C35]" strokeWidth="12" fill="none" strokeDasharray="552" strokeDashoffset="0" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold font-display">100%</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Efficiency</div>
              </div>
            </div>

            <div className="flex justify-between px-4 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold">Projects</div>
              </div>
              <div className="w-[1px] h-10 bg-white/5"></div>
              <div>
                <div className="text-2xl font-bold">45h</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold">Logged</div>
              </div>
            </div>
          </div>

          {/* Global Clients Map */}
          <div>
            <h3 className="text-xl font-bold mb-8">Global Clients</h3>
            <div className="bg-[#141414] rounded-2xl border border-white/5 p-6 aspect-video relative flex items-center justify-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" className="w-full opacity-20" alt="Map" />
              <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-[#FF5C35] rounded-full shadow-lg shadow-[#FF5C35]/50 border-2 border-white animate-pulse"></div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 className="text-xl font-bold mb-8">Recent Activity</h3>
            <div className="space-y-6">
              {[
                { title: 'Detailing complete', desc: 'Porsche 911 GT3 - 10m ago', color: 'bg-[#FF5C35]' },
                { title: 'New Contact request', desc: 'Liam Davies - 1h ago', color: 'bg-white/20' },
                { title: 'Invoice generated', desc: '#INV-2049 - 3h ago', color: 'bg-white/20' }
              ].map((act, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${act.color}`}></div>
                  <div>
                    <div className="text-sm font-bold text-gray-200">{act.title}</div>
                    <div className="text-[10px] text-gray-500">{act.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="pt-10">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <div className="text-[10px] font-bold text-gray-500 uppercase">System Status</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase">Optimal</div>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF5C35]/50 w-2/3"></div>
              </div>
              <div className="flex justify-between mt-2 text-[8px] text-gray-600">
                <span>Server Load</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
