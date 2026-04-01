import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../views/components/AdminSidebar';

const AdminScheduling = () => {

  const technicians = [
    { name: 'Mike Ross', status: 'Polishing - Bay 1', active: true, color: 'bg-blue-500' },
    { name: 'Jenny Wilson', status: 'Interior - Bay 3', active: true, color: 'bg-green-500' },
    { name: 'Ahmed Hassan', status: 'On Break', active: false, color: 'bg-yellow-500' },
    { name: 'Kenji Sato', status: 'Coating - Bay 2', active: true, color: 'bg-blue-500' },
  ];

  const scheduleSlots = [
    { time: '08:00 AM', job: { name: 'James Carter', car: 'Porsche 911 GT3 • Ceramic Coating', tech: 'Mike Ross • Bay 1', status: 'IN PROGRESS', color: 'border-blue-500 bg-blue-500/10' } },
    { time: '09:00 AM', job: { name: 'Sarah Li', car: 'BMW X5 • Interior Detail', tech: 'Jenny Wilson • Bay 3', status: 'CONFIRMED', color: 'border-green-500 bg-green-500/10', right: true } },
    { time: '10:00 AM', job: null },
    { time: '11:00 AM', job: { name: 'Robert Fox', car: 'Mercedes S-Class • Paint Correction', status: 'PENDING', color: 'border-yellow-500 bg-yellow-500/10' } },
    { time: '12:00 PM', spacer: 'LUNCH BREAK', job: null },
    { time: '01:00 PM', job: { name: 'Elena Gomez', car: 'Audi RS7 • Full Detail Package', tech: 'Alex • Bay 2', status: 'COMPLETED', color: 'border-teal-500 bg-teal-500/10', extra: 'Ready for pickup' } },
    { time: '02:00 PM', job: null },
    { time: '03:00 PM', job: { name: 'Arjun Singh', car: 'Tesla Model S', status: 'CANCELLED', color: 'border-red-500 bg-red-500/10' } }
  ];

  return (
    <div className="flex bg-[#0a0a0a] min-h-screen text-white">
      <AdminSidebar />

      <div className="flex-grow lg:pl-64 flex flex-col xl:flex-row w-full overflow-hidden">
        <div className="flex-grow p-6 lg:p-10 border-b xl:border-b-0 xl:border-r border-white/5 w-full">
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6 pl-12 lg:pl-0 mt-4 lg:mt-0">
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                Dashboard / Overview <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 6 Active Techs
              </div>
              <h1 className="text-3xl font-display font-bold">Scheduling</h1>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              <div className="relative shrink-0">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input type="text" placeholder="Search Contact..." className="bg-[#1a1a1a] border border-white/5 rounded-xl pl-12 pr-6 py-3 text-sm w-48 sm:w-64 focus:outline-none focus:border-[#FF5C35]" />
              </div>
              <Link
                to="/Contact"
                className="px-6 py-3 shrink-0 bg-[#FF5C35] text-white font-bold rounded-xl text-sm flex items-center gap-2 hover:brightness-110 shadow-lg shadow-[#FF5C35]/20 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                <span className="hidden sm:inline">New Contact</span>
                <span className="sm:hidden">New</span>
              </Link>
            </div>
          </header>

          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto overflow-x-auto">
              <button className="p-2 text-gray-500 hover:text-white shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg></button>
              <h2 className="text-lg sm:text-xl font-bold whitespace-nowrap">October 24, 2023</h2>
              <button className="p-2 text-gray-500 hover:text-white shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></button>
            </div>
            <div className="flex bg-[#1a1a1a] p-1 rounded-xl w-full sm:w-auto overflow-x-auto shrink-0">
              <button className="px-4 py-1.5 rounded-lg text-xs text-gray-500 font-bold whitespace-nowrap">Month</button>
              <button className="px-4 py-1.5 rounded-lg text-xs text-gray-500 font-bold whitespace-nowrap">Week</button>
              <button className="px-4 py-1.5 rounded-lg text-xs bg-[#262626] text-white font-bold whitespace-nowrap">Day</button>
            </div>
          </div>

          <div className="relative space-y-20 pt-10 overflow-x-auto w-full pb-12 pr-4 min-w-full">
            <div className="min-w-[600px]">
              {scheduleSlots.map((slot, i) => (
                <div key={i} className="flex relative h-0">
                  <div className="w-20 sm:w-24 text-[10px] text-gray-500 font-bold -mt-2 shrink-0">{slot.time}</div>
                  <div className="flex-grow h-[1px] bg-white/5"></div>

                  {slot.job && (
                    <div className={`absolute top-0 rounded-2xl p-6 border-l-4 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] shadow-2xl backdrop-blur-md z-10 transition-all hover:scale-[1.02] ${slot.job.color} ${slot.job.right ? 'left-[40%] sm:right-0 sm:left-auto lg:-translate-x-12 -translate-y-4' : 'left-24 sm:left-32 -translate-y-4'}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                        <div className="flex items-center gap-3">
                          <img src={`https://i.pravatar.cc/150?u=${slot.job.name}`} className="w-8 h-8 rounded-full shrink-0" alt="" />
                          <span className="font-bold text-sm truncate max-w-[120px] sm:max-w-[200px]">{slot.job.name}</span>
                        </div>
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-widest inline-block w-fit ${slot.job.status === 'COMPLETED' ? 'bg-teal-500 text-white' : 'bg-black/40 text-gray-400'}`}>{slot.job.status}</span>
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

        <div className="w-full xl:w-96 p-6 lg:p-10 space-y-12 bg-[#0d0d0d] shrink-0">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">Shop Snapshot</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-6">
              <div className="text-center bg-[#1a1a1a] sm:bg-transparent p-4 sm:p-0 rounded-xl">
                <div className="text-2xl font-bold">12</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">Contacts</div>
              </div>
              <div className="text-center bg-[#1a1a1a] sm:bg-transparent p-4 sm:p-0 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">5</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">Active</div>
              </div>
              <div className="text-center bg-[#1a1a1a] sm:bg-transparent p-4 sm:p-0 rounded-xl">
                <div className="text-2xl font-bold text-[#FF5C35]">$4.2k</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase">Today</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold text-gray-200">Bay Capacity</h3>
              <span className="text-[10px] font-bold text-green-400">85% Load</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full mb-2 overflow-hidden">
              <div className="h-full bg-[#FF5C35] w-[85%] rounded-full shadow-lg shadow-[#FF5C35]/50 transition-all"></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-600">
              <span>Occupied: 6</span>
              <span>Total: 7</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-200 mb-8 tracking-tight">Technician Status</h3>
            <div className="space-y-6">
              {technicians.map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer bg-[#1a1a1a] xl:bg-transparent p-4 xl:p-0 rounded-xl xl:rounded-none">
                  <img src={`https://i.pravatar.cc/150?u=${tech.name}`} className="w-10 h-10 rounded-full border border-white/5 group-hover:border-[#FF5C35]/50 transition-all shrink-0" alt="" />
                  <div className="flex-grow overflow-hidden">
                    <div className="text-sm font-bold text-gray-200 truncate">{tech.name}</div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${tech.active ? tech.color : 'bg-gray-700'}`}></span>
                      <span className="truncate">{tech.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-200 mb-8">Pending Dispatch</h3>
            <div className="p-6 bg-[#1a1a1a] border border-white/5 rounded-2xl">
              <div className="flex justify-between mb-4">
                <div className="overflow-hidden pr-2">
                  <h4 className="font-bold text-sm truncate">Ferrari 488 Pista</h4>
                  <p className="text-[10px] text-gray-500 truncate">Express Wash • VIP</p>
                </div>
                <span className="text-[#FF5C35] font-bold text-xs shrink-0">4:00 PM</span>
              </div>
              <button className="w-full py-2.5 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg text-[10px] font-bold hover:bg-green-500 hover:text-white transition-all">Assign To Bay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScheduling;
