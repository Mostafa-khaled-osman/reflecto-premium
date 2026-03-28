
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICE_HISTORY } from '../../constants';

const DashboardView = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 px-6 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-2">
              Welcome back <span className="text-[#FF5C35]">Omar</span>
            </h1>
            <p className="text-gray-500 text-sm">Member since January 2026</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-gray-400 hover:text-white hover:border-white/20 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
            Log out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Service Status */}
          <div className="lg:col-span-2 bg-[#262626] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h10" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
            </div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF5C35]/10 rounded-xl flex items-center justify-center text-xl text-[#FF5C35]">🚗</div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mercedes-Benz S-Class</h3>
                  <p className="text-gray-400 text-xs">Full paint protection film</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#FF5C35]/20 text-[#FF5C35] text-[10px] font-bold rounded-full uppercase">In Progress</span>
            </div>

            <div className="mb-10">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-[#FF5C35] font-bold">45%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF5C35] to-[#ff8060] w-[45%] rounded-full"></div>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  Estimated Delivery
                </div>
                <div className="text-2xl font-display font-bold">1d 21h 57m</div>
                <div className="text-[10px] text-gray-600">11/12/2026</div>
              </div>
            </div>
          </div>

          {/* Loyalty Points */}
          <div className="bg-[#262626] border border-white/5 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl">🎁</div>
              <h3 className="text-xl font-bold">Loyalty points</h3>
            </div>

            <div className="mb-8 text-center">
              <div className="text-6xl font-display font-bold text-[#FF5C35] mb-1">2,228</div>
              <div className="text-xs text-gray-500">Available points</div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-[10px] mb-2 uppercase tracking-widest">
                <span className="text-gray-500">Next Reward</span>
                <span className="text-white font-bold">58 pts</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full">
                <div className="h-full bg-[#FF5C35] w-[80%] rounded-full"></div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <button className="w-full py-3 bg-[#FF5C35] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all">Redeem Points</button>
              <button className="w-full py-3 border border-white/10 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                Gift Points
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Active Warranty */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#FF5C35]/10 border border-[#FF5C35]/20 rounded-xl flex items-center justify-center text-xl text-[#FF5C35]">🛡️</div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Active Warranty</h3>
            </div>

            <div className="space-y-6 mb-10">
              {[
                { label: 'Service', value: 'PPF Full Body' },
                { label: 'Start Date', value: '11/2/2024' },
                { label: 'Coverage Period', value: '10-Years' },
                { label: 'Total Points', value: '2,228', isAccent: true }
              ].map((row, i) => (
                <div key={i} className={`flex justify-between items-end pb-4 border-b border-white/5 ${i === 3 ? 'border-none' : ''}`}>
                  <span className="text-gray-500 text-sm">{row.label}</span>
                  <span className={`font-bold ${row.isAccent ? 'text-[#FF5C35] text-xl font-display' : 'text-gray-200'}`}>{row.value}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-white/5 text-gray-300 text-sm font-bold rounded-xl flex items-center justify-center gap-2 border border-white/5 hover:bg-white/10 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download Certificate
            </button>
          </div>

          {/* Service History */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF5C35]/10 rounded-xl flex items-center justify-center text-xl text-[#FF5C35]">📈</div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Service History</h3>
              </div>
              <span className="px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-bold rounded-lg border border-white/5">3 Services</span>
            </div>

            <div className="space-y-4 flex-grow">
              {SERVICE_HISTORY.map((item) => (
                <div key={item.id} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-[#FF5C35]/30 transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-gray-200">{item.service}</h4>
                    <span className="text-[#FF5C35] text-xs font-bold px-2 py-0.5 bg-[#FF5C35]/10 rounded-full">{item.points}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mb-4">{item.car}</p>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-600">{item.date}</span>
                    <span className="text-white font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Services', value: '3', icon: '🏆' },
            { label: 'Total Warranty', value: '10', icon: '🛡️' },
            { label: 'Total Points', value: '2,228', icon: '🎁' },
            { label: 'Total Spent', value: 'SAR 24,500', icon: '📈' }
          ].map((stat, i) => (
            <div key={i} className="bg-[#262626] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center group hover:border-[#FF5C35]/50 transition-all">
              <div className="text-2xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-display font-bold mb-1 text-gray-200">{stat.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
