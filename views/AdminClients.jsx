import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminClients = () => {
  const navigate = useNavigate();

  // Reusable card container styles
  const cardStyle = "bg-[#1a1a1a] rounded-2xl border border-white/10 p-6 flex flex-col relative overflow-hidden";
  const highlightedCardStyle = "bg-[#1a1a1a] rounded-2xl border border-[#FF4500]/50 p-6 flex flex-col relative overflow-hidden";

  return (

    <div className="min-h-screen bg-[#111111] pb-24 pt-12 px-4 sm:px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-display tracking-widest text-white font-light">
              <span className="text-[#FF4500]">Welcome back</span> Omar
            </h1>
            <p className="text-gray-400 text-[11px] mt-2 tracking-widest font-light">Member since january 2026</p>
          </div>
          <button onClick={() => navigate('/')} className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-[10px] text-white hover:bg-white/5 transition-colors uppercase tracking-[0.2em]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            log out
          </button>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Current Project Info */}
            <div className={highlightedCardStyle}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 border border-[#FF4500]/30 rounded-xl">
                    <svg className="w-6 h-6 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-display text-white tracking-widest uppercase">Mercedes-Banz s-class</h2>
                    <p className="text-gray-500 text-[10px] font-light">Full paint protection film</p>
                  </div>
                </div>
                <span className="px-3 py-1 border border-[#FF4500]/30 text-[#FF4500] bg-[#FF4500]/10 rounded-full text-[9px] uppercase tracking-widest">In progress</span>
              </div>

              {/* Progress Bar Area */}
              <div className="mb-10">
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-light">
                  <span className="tracking-widest text-[10px]">Progress</span>
                  <span className="text-white font-bold text-[10px]">45%</span>
                </div>
                <div className="h-1.5 w-full bg-[#222] rounded-full overflow-hidden">
                  {/* Outer glow effect on progress bar */}
                  <div className="h-full bg-gradient-to-r from-[#FF4500]/50 to-[#FF4500] relative drop-shadow-[0_0_8px_rgba(255,69,0,0.8)]" style={{ width: '45%' }}></div>
                </div>
              </div>

              {/* Estimated Delivery */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[11px] font-light tracking-widest">Estimated Delivery</span>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-lg font-display text-[#FF4500] tracking-widest">1d/21h /57m</div>
                  <div className="text-[9px] text-gray-500 tracking-widest">11/2/2026</div>
                </div>
              </div>
            </div>

            {/* Service Checklists */}
            <div className={`${highlightedCardStyle} py-4`}>
              <div className="flex flex-wrap items-center justify-start sm:justify-between gap-y-3 gap-x-4">
                {[
                  { label: 'Paint Protection', checked: true },
                  { label: 'Nano Ceramic', checked: false },
                  { label: 'Paint Correction', checked: true },
                  { label: 'Thermal Insulation', checked: false },
                  { label: 'Dash Cam', checked: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    {item.checked ? (
                      <svg className="w-4 h-4 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#FF4500]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="9" strokeWidth="2" strokeDasharray="4 4" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l2 2" />
                      </svg>
                    )}
                    <span className={`text-[9px] tracking-wider uppercase font-light ${item.checked ? 'text-white' : 'text-gray-400'}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

             {/* Active Warranty */}
             <div className={cardStyle}>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 border border-[#FF4500]/30 rounded-xl">
                  <svg className="w-6 h-6 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-display text-white tracking-widest font-light">Rctive Warrenty</h2>
              </div>

              <div className="space-y-4 font-light">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-[11px] tracking-widest">Service</span>
                  <span className="text-white text-[11px] font-bold tracking-widest">PPF Ful Body</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-[11px] tracking-widest">Start Date</span>
                  <span className="text-white text-[11px] font-bold tracking-widest">11/2/2024</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-[11px] tracking-widest">Coverage beriod</span>
                  <span className="text-white text-[11px] font-bold tracking-widest">10-Years</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-400 text-[11px] tracking-widest">Time Remaining</span>
                  <span className="text-[#FF4500] text-sm font-display tracking-widest drop-shadow-[0_0_5px_rgba(255,69,0,0.5)]">2.228</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Loyalty Points */}
            <div className={cardStyle}>
              <div className="flex items-center gap-4 mb-10">
                 <div className="p-3 border border-[#FF4500]/30 rounded-xl">
                  <svg className="w-6 h-6 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-xl font-display text-white tracking-widest font-light">Layalty points</h2>
              </div>

              <div className="text-center mb-10">
                <div className="text-6xl font-display text-[#FF4500] font-light tracking-widest drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">2.228</div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest mt-2">Aviable points</div>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-gray-500 text-[9px] tracking-widest uppercase">Next Reward</span>
                  <span className="text-white text-[11px] font-bold tracking-widest">58 pts</span>
                </div>
                <div className="h-1.5 w-full bg-[#222] rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-[#FF4500]/50 to-[#FF4500] relative drop-shadow-[0_0_8px_rgba(255,69,0,0.8)]" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <button className="w-full py-4 bg-[#FF4500] hover:bg-[#FF4500]/90 text-white text-[11px] font-bold rounded-xl uppercase tracking-[0.2em] transition-all shadow-[0_0_15px_rgba(255,69,0,0.3)] hover:shadow-[0_0_25px_rgba(255,69,0,0.5)]">
                  Redeem Points
                </button>
                <button className="w-full py-4 bg-[#1a1a1a] border border-white/20 hover:bg-white/5 text-white text-[11px] font-bold rounded-xl flex items-center justify-center gap-2 uppercase tracking-[0.2em] transition-colors">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /> {/* Using a placeholder gift/share icon */}
                  </svg>
                  Gift Points
                </button>
              </div>
            </div>

            {/* Service History */}
            <div className={cardStyle}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-[#FF4500]/30 rounded-lg">
                    <svg className="w-5 h-5 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h2 className="text-sm font-display text-white tracking-widest font-light">Service History</h2>
                </div>
                <span className="px-3 py-1 border border-white/20 text-white text-[9px] rounded uppercase tracking-widest">3 Services</span>
              </div>

              <div className="space-y-4 shadow-inner">
                {[1, 2, 3].map((item, idx) => (
                  <div key={idx} className="bg-[#1e1e1e] border border-white/5 p-4 rounded-xl flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                      <div>
                        <div className="text-[10px] text-white font-bold tracking-widest">Paint Protction Film Full bpdy</div>
                        <div className="text-[8px] text-gray-500 tracking-wider">Mercedes-Banz s-class</div>
                      </div>
                      <span className="px-2 py-0.5 border border-[#FF4500]/50 text-[#FF4500] text-[8px] rounded-full uppercase tracking-wider relative overflow-hidden bg-[#FF4500]/5 self-start sm:self-auto">
                        <span className="relative z-10">+1823 pts</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[8px] text-gray-500 tracking-wider">11/2/2024</span>
                      <span className="text-[9px] text-white tracking-widest">SAR 12.500</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { amount: '3', label: 'Total Services', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /> },
            { amount: '10', label: 'Total Warranty', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
            { amount: '2.228', label: 'Total Points', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /> },
            { amount: 'SAR 24.500', label: 'Total Spent', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center shadow-xl">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4500] mb-4 sm:mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {stat.icon}
              </svg>
              <div className="text-2xl sm:text-3xl font-display text-white tracking-widest font-light mb-2 sm:mb-4">{stat.amount}</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminClients;
