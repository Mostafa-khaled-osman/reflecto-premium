import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { adminService } from '../services/api';
import AdminSidebar from '../components/AdminSidebar';

const AdminScheduling = () => {
  // Simple state for today's date
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const { data: schedulingData, isLoading } = useQuery({
    queryKey: ['adminScheduling', selectedDate],
    queryFn: () => adminService.getScheduling(selectedDate),
  });

  // Fallbacks if data doesn't match expected structure yet
  const technicians = schedulingData?.technicians || [
    { name: 'Mike Ross', status: 'Polishing - Bay 1', active: true, color: 'bg-blue-500' },
    { name: 'Jenny Wilson', status: 'Interior - Bay 3', active: true, color: 'bg-green-500' },
    { name: 'Ahmed Hassan', status: 'On Break', active: false, color: 'bg-yellow-500' },
    { name: 'Kenji Sato', status: 'Coating - Bay 2', active: true, color: 'bg-blue-500' },
  ];

  const bayCapacity = schedulingData?.bay_capacity || { occupied: 6, total: 7 };
  const bayPercent = bayCapacity.total > 0 ? Math.round((bayCapacity.occupied / bayCapacity.total) * 100) : 0;

  const quickStats = schedulingData?.stats || {
    contacts: 12,
    active: 5,
    today_revenue: 4200
  };

  // Convert raw appointments to our slot format, or fallback
  const appointments = schedulingData?.appointments || [];
  
  // Default empty schedule to map over
  const defaultTimes = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];
  
  const scheduleSlots = defaultTimes.map(time => {
    // Attempt to find an appointment matching this time slot
    // In a real robust app, this would use proper Date parsing/matching
    const apt = appointments.find(a => {
      // Mock logic: assuming API returns 'time' like '08:00' or we can extract it
      return a.time === time || (a.start_time && new Date(a.start_time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) === time);
    });

    if (time === '12:00 PM') {
      return { time, spacer: 'LUNCH BREAK', job: null };
    }

    if (apt) {
      // Color map based on status
      const colorMap = {
        'in_progress': 'border-blue-500 bg-blue-500/10',
        'completed': 'border-teal-500 bg-teal-500/10',
        'pending': 'border-yellow-500 bg-yellow-500/10',
        'cancelled': 'border-red-500 bg-red-500/10',
        'confirmed': 'border-green-500 bg-green-500/10'
      };

      return {
        time,
        job: {
          name: apt.client_name || 'Client',
          car: apt.vehicle || 'Vehicle',
          tech: apt.technician || 'Unassigned',
          status: (apt.status || 'PENDING').toUpperCase().replace('_', ' '),
          color: colorMap[apt.status] || colorMap['pending'],
          extra: apt.notes,
          right: Math.random() > 0.5 // Random stagger for visual effect
        }
      };
    }

    // Fallback static data if API is empty just to show the UI works
    // Remove this else block once backend is fully populated
    if (appointments.length === 0) {
       if (time === '08:00 AM') return { time, job: { name: 'James Carter', car: 'Porsche 911 GT3 • Ceramic Coating', tech: 'Mike Ross • Bay 1', status: 'IN PROGRESS', color: 'border-blue-500 bg-blue-500/10' } };
       if (time === '09:00 AM') return { time, job: { name: 'Sarah Li', car: 'BMW X5 • Interior Detail', tech: 'Jenny Wilson • Bay 3', status: 'CONFIRMED', color: 'border-green-500 bg-green-500/10', right: true } };
       if (time === '11:00 AM') return { time, job: { name: 'Robert Fox', car: 'Mercedes S-Class • Paint Correction', status: 'PENDING', color: 'border-yellow-500 bg-yellow-500/10' } };
       if (time === '01:00 PM') return { time, job: { name: 'Elena Gomez', car: 'Audi RS7 • Full Detail Package', tech: 'Alex • Bay 2', status: 'COMPLETED', color: 'border-teal-500 bg-teal-500/10', extra: 'Ready for pickup' } };
       if (time === '03:00 PM') return { time, job: { name: 'Arjun Singh', car: 'Tesla Model S', status: 'CANCELLED', color: 'border-red-500 bg-red-500/10' } };
    }

    return { time, job: null };
  });

  const pendingDispatch = schedulingData?.pending_dispatch || [
    { car: 'Ferrari 488 Pista', type: 'Express Wash • VIP', time: '4:00 PM' }
  ];

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white overflow-hidden pt-20">
      <AdminSidebar />

      <div className="flex-1 flex flex-col xl:flex-row w-full overflow-hidden">
        <div className="flex-grow p-4 lg:p-10 border-b xl:border-b-0 xl:border-r border-white/5 w-full overflow-y-auto">
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6 pl-12 lg:pl-0 mt-4 lg:mt-0">
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                Dashboard / Scheduling 
                <span className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-yellow-500' : 'bg-green-500'}`}></span> 
                {isLoading ? 'Syncing...' : `${technicians.filter(t => t.active).length} Active Techs`}
              </div>
              <h1 className="text-3xl font-display font-bold">Scheduling</h1>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              <div className="relative shrink-0">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input type="text" placeholder="Search Client..." className="bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-6 py-3 text-sm w-48 sm:w-64 focus:outline-none focus:border-[#FF5C35]" />
              </div>
              <Link
                to="/admin/add-client"
                className="px-6 py-3 shrink-0 bg-[#FF5C35] text-white font-bold rounded-xl text-sm flex items-center gap-2 hover:brightness-110 shadow-lg shadow-[#FF5C35]/20 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                <span className="hidden sm:inline">New Client</span>
                <span className="sm:hidden">New</span>
              </Link>
            </div>
          </header>

          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto overflow-x-auto">
              <button 
                onClick={() => {
                  const d = new Date(selectedDate);
                  d.setDate(d.getDate() - 1);
                  setSelectedDate(d.toISOString().split('T')[0]);
                }}
                className="p-2 text-gray-500 hover:text-white shrink-0 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              
              <h2 className="text-lg sm:text-xl font-bold whitespace-nowrap">
                {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </h2>
              
              <button 
                onClick={() => {
                  const d = new Date(selectedDate);
                  d.setDate(d.getDate() + 1);
                  setSelectedDate(d.toISOString().split('T')[0]);
                }}
                className="p-2 text-gray-500 hover:text-white shrink-0 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
            <div className="flex bg-[#1a1a1a] p-1 rounded-xl w-full sm:w-auto overflow-x-auto shrink-0 border border-white/5">
              <button className="px-4 py-1.5 rounded-lg text-xs text-gray-500 font-bold whitespace-nowrap hover:bg-[#262626]">Month</button>
              <button className="px-4 py-1.5 rounded-lg text-xs text-gray-500 font-bold whitespace-nowrap hover:bg-[#262626]">Week</button>
              <button className="px-4 py-1.5 rounded-lg text-xs bg-[#FF5C35] text-white font-bold whitespace-nowrap">Day</button>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="relative space-y-20 pt-10 overflow-x-auto w-full pb-12 pr-4 min-w-full">
            {isLoading && (
              <div className="absolute inset-0 bg-[#0a0a0a]/50 backdrop-blur-sm z-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#FF5C35] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <div className="min-w-[600px]">
              {scheduleSlots.map((slot, i) => (
                <div key={i} className="flex relative h-0">
                  <div className="w-20 sm:w-24 text-[10px] text-gray-500 font-bold -mt-2 shrink-0">{slot.time}</div>
                  <div className="flex-grow h-[1px] bg-white/5 relative">
                    {/* Current time indicator line could go here */}
                  </div>

                  {slot.job && (
                    <div className={`absolute top-0 rounded-2xl p-4 sm:p-6 border-l-4 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] shadow-2xl backdrop-blur-md z-10 transition-all hover:scale-[1.02] cursor-pointer ${slot.job.color} ${slot.job.right ? 'left-[40%] sm:right-0 sm:left-auto lg:-translate-x-12 -translate-y-4' : 'left-24 sm:left-32 -translate-y-4'}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                            {slot.job.name.charAt(0)}
                          </div>
                          <span className="font-bold text-sm truncate max-w-[120px] sm:max-w-[200px] text-white">{slot.job.name}</span>
                        </div>
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-widest inline-block w-fit ${slot.job.status === 'COMPLETED' ? 'bg-teal-500 text-white' : 'bg-black/40 text-gray-300'}`}>{slot.job.status}</span>
                      </div>
                      <div className="text-[10px] text-gray-300 flex items-center gap-2 mb-2">
                        <svg className="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h10" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
                        <span className="truncate">{slot.job.car}</span>
                      </div>
                      {slot.job.tech && (
                        <div className="text-[10px] text-gray-400 flex items-center gap-2">
                          <svg className="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                          <span className="truncate">Tech: {slot.job.tech}</span>
                        </div>
                      )}
                      {slot.job.extra && (
                        <div className="mt-4 text-[10px] font-bold text-teal-400 flex items-center gap-2">
                          <svg className="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                          {slot.job.extra}
                        </div>
                      )}
                    </div>
                  )}

                  {slot.spacer && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 text-[9px] sm:text-[10px] text-gray-700 font-bold uppercase tracking-[0.5em] whitespace-nowrap">{slot.spacer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="w-full xl:w-[320px] lg:p-6 space-y-8 bg-[#141414] shrink-0 border-t xl:border-t-0 xl:border-l border-[#333333] overflow-y-auto flex-1 p-4">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Snapshot</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#222222] border border-[#333333] p-4 rounded-xl flex flex-col items-center">
                <div className="text-2xl font-bold text-white">{quickStats.contacts}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Contacts</div>
              </div>
              <div className="bg-[#222222] border border-[#333333] p-4 rounded-xl flex flex-col items-center">
                <div className="text-2xl font-bold text-blue-400">{quickStats.active}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Active</div>
              </div>
              <div className="bg-[#222222] border border-[#333333] p-4 rounded-xl flex flex-col items-center col-span-2">
                <div className="text-2xl font-bold text-[#FF5C35]">${(quickStats.today_revenue || 0).toLocaleString()}</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Today's Revenue</div>
              </div>
            </div>
          </div>

          <div className="bg-[#222222] border border-[#333333] p-5 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-200">Bay Capacity</h3>
              <span className="text-[10px] font-bold text-green-400">{bayPercent}% Load</span>
            </div>
            <div className="h-2 w-full bg-[#141414] rounded-full mb-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF5C35] to-[#ff8060] rounded-full shadow-[0_0_10px_rgba(255,92,53,0.5)] transition-all duration-1000" style={{ width: `${bayPercent}%` }}></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>Occupied: {bayCapacity.occupied}</span>
              <span>Total: {bayCapacity.total}</span>
            </div>
          </div>

          <div className="bg-[#222222] border border-[#333333] p-5 rounded-xl">
            <h3 className="text-sm font-bold text-gray-200 mb-6 tracking-tight">Technician Status</h3>
            <div className="space-y-4">
              {technicians.map((tech, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer bg-[#141414] p-3 rounded-lg border border-[#333333] hover:border-[#FF5C35]/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xs shrink-0">
                    {tech.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <div className="text-xs font-bold text-gray-200 truncate">{tech.name}</div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${tech.active ? tech.color : 'bg-gray-700'}`}></span>
                      <span className="truncate">{tech.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222222] border border-[#333333] p-5 rounded-xl">
            <h3 className="text-sm font-bold text-gray-200 mb-4">Pending Dispatch</h3>
            <div className="space-y-3">
              {pendingDispatch.map((pd, idx) => (
                <div key={idx} className="p-4 bg-[#141414] border border-[#333333] rounded-lg relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF5C35]"></div>
                  <div className="flex justify-between mb-3 pl-2">
                    <div className="overflow-hidden pr-2">
                      <h4 className="font-bold text-xs truncate text-white">{pd.car}</h4>
                      <p className="text-[10px] text-gray-500 truncate mt-1">{pd.type}</p>
                    </div>
                    <span className="text-[#FF5C35] font-bold text-[10px] shrink-0">{pd.time}</span>
                  </div>
                  <button className="w-full py-2 bg-[#FF5C35]/10 border border-[#FF5C35]/30 text-[#FF5C35] rounded text-[10px] font-bold hover:bg-[#FF5C35] hover:text-white transition-all">Assign Bay</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScheduling;
