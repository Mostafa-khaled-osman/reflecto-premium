import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { meService } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { SERVICE_HISTORY } from '../constants.jsx'; // Fallback
import Icon from '../components/Icon.jsx';

const GiftPointsModal = ({ isOpen, onClose, onConfirm, isLoading }) => {
  const [phone, setPhone] = useState('');
  const [points, setPoints] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <h3 className="text-xl font-bold mb-4">Gift Points to a Friend</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Friend's Phone Number</label>
            <input 
              type="tel" 
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="+966501234567"
              className="w-full bg-[#262626] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5C35]"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Points to Gift</label>
            <input 
              type="number" 
              value={points}
              onChange={e => setPoints(e.target.value)}
              placeholder="e.g. 500"
              className="w-full bg-[#262626] border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5C35]"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 py-3 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-all disabled:opacity-50"
          >
            Cancel
          </button>
          <button 
            onClick={() => onConfirm(phone, parseInt(points, 10))}
            disabled={isLoading || !phone || !points || isNaN(points)}
            className="flex-1 py-3 bg-[#FF5C35] text-white rounded-xl font-bold hover:brightness-110 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {isLoading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
            Send Gift
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardView = () => {
  const { logout, user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  // Fetch client profile data
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ['clientProfile'],
    queryFn: () => meService.getProfile(),
  });

  // Mutations
  const redeemMutation = useMutation({
    mutationFn: (points) => meService.redeemPoints(points),
    onSuccess: (res) => {
      toast.success(res.message || 'Points redeemed successfully!');
      queryClient.invalidateQueries({ queryKey: ['clientProfile'] });
    },
    onError: (err) => {
      toast.error(err.message || 'Failed to redeem points.');
    }
  });

  const giftMutation = useMutation({
    mutationFn: ({ phone, points }) => meService.transferPoints(phone, points),
    onSuccess: (res) => {
      toast.success(res.message || 'Points gifted successfully!');
      setIsGiftModalOpen(false);
      queryClient.invalidateQueries({ queryKey: ['clientProfile'] });
    },
    onError: (err) => {
      toast.error(err.message || 'Failed to gift points.');
    }
  });

  const handleRedeem = () => {
    // By default, trying to redeem 1000 points. Can be improved with a dropdown.
    if (!profile?.loyalty?.can_redeem) {
      toast.warning("You don't have enough points to redeem yet.");
      return;
    }
    
    // Pick the first available redemption option
    const pointsToRedeem = profile?.loyalty?.redemption_options?.[0]?.points || 1000;
    redeemMutation.mutate(pointsToRedeem);
  };

  const handleGift = (phone, points) => {
    if (points > (profile?.loyalty?.total_points || 0)) {
      toast.error("You don't have that many points.");
      return;
    }
    giftMutation.mutate({ phone, points });
  };

  if (isProfileLoading) {
    return (
      <div className="py-12 px-6 bg-[#1a1a1a] min-h-[80vh] flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-[#FF5C35] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Safe destructuring with fallbacks
  const name = profile?.full_name || user?.full_name || 'Valued Client';
  const appointment = profile?.current_appointment;
  const loyalty = profile?.loyalty || { total_points: 0, can_redeem: false };
  const warranty = profile?.warranty || { is_active: false, coverage_years: 0 };
  const stats = profile?.stats || { total_spent: 0, currency: 'SAR' };
  
  // Calculate progress for "Next Reward" (e.g. next tier is at 1000)
  const nextRewardTier = 1000;
  const pointsRemaining = Math.max(0, nextRewardTier - (loyalty.total_points % nextRewardTier));
  const progressPercent = ((loyalty.total_points % nextRewardTier) / nextRewardTier) * 100;

  return (
    <div className="py-12 px-6 bg-[#1a1a1a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-2">
              Welcome back <span className="text-[#FF5C35]">{name.split(' ')[0]}</span>
            </h1>
            <p className="text-gray-500 text-sm">Member since 2026</p>
          </div>
          <button
            onClick={() => logout()}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-gray-400 hover:text-white hover:border-white/20 transition-all w-fit"
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
            
            {appointment ? (
              <>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#FF5C35]/10 rounded-xl flex items-center justify-center text-xl text-[#FF5C35]">
                      <Icon name="directions_car" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{appointment.car?.brand || 'Your Vehicle'} {appointment.car?.model || ''}</h3>
                      <p className="text-gray-400 text-xs">{appointment.service?.name || 'Premium Protection Service'}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#FF5C35]/20 text-[#FF5C35] text-[10px] font-bold rounded-full uppercase">
                    {appointment.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="mb-10 relative z-10">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-[#FF5C35] font-bold">{appointment.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FF5C35] to-[#ff8060] rounded-full" style={{ width: `${appointment.progress}%` }}></div>
                  </div>
                </div>

                <div className="flex items-end justify-between relative z-10">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      Estimated Time Remaining
                    </div>
                    <div className="text-2xl font-display font-bold">
                      {appointment.time_remaining?.days > 0 && `${appointment.time_remaining.days}d `}
                      {appointment.time_remaining?.hours}h
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center relative z-10 opacity-70">
                <Icon name="event_available" />
                <h3 className="text-xl font-bold mt-4 mb-2">No active appointments</h3>
                <p className="text-sm text-gray-400">Your vehicle is ready or you haven't booked a service yet.</p>
                <Link to="/Contact" className="mt-6 px-6 py-2 bg-[#FF5C35]/20 text-[#FF5C35] rounded-full font-bold text-sm hover:bg-[#FF5C35] hover:text-white transition-colors">
                  Book a Service
                </Link>
              </div>
            )}
          </div>

          {/* Loyalty Points */}
          <div className="bg-[#262626] border border-white/5 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl text-[#FF5C35]">
                <Icon name="redeem" />
              </div>
              <h3 className="text-xl font-bold">Loyalty points</h3>
            </div>

            <div className="mb-8 text-center">
              <div className="text-6xl font-display font-bold text-[#FF5C35] mb-1">
                {loyalty.total_points.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">Available points</div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-[10px] mb-2 uppercase tracking-widest">
                <span className="text-gray-500">Next Reward</span>
                <span className="text-white font-bold">{pointsRemaining} pts</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF5C35] rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <button 
                onClick={handleRedeem}
                disabled={redeemMutation.isPending || !loyalty.can_redeem}
                className="w-full py-3 bg-[#FF5C35] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {redeemMutation.isPending && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                Redeem Points
              </button>
              <button 
                onClick={() => setIsGiftModalOpen(true)}
                disabled={loyalty.total_points <= 0}
                className="w-full py-3 border border-white/10 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
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
              <div className="w-12 h-12 bg-[#FF5C35]/10 border border-[#FF5C35]/20 rounded-xl flex items-center justify-center text-xl text-[#FF5C35]">
                <Icon name="shield" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Active Warranty</h3>
            </div>

            {warranty.is_active ? (
              <>
                <div className="space-y-6 mb-10">
                  {[
                    { label: 'Status', value: 'Active', isAccent: true },
                    { label: 'Coverage Period', value: `${warranty.coverage_years}-Years` },
                  ].map((row, i) => (
                    <div key={i} className={`flex justify-between items-end pb-4 border-b border-white/5`}>
                      <span className="text-gray-500 text-sm">{row.label}</span>
                      <span className={`font-bold ${row.isAccent ? 'text-[#FF5C35] text-lg font-display uppercase tracking-widest' : 'text-gray-200'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-white/5 text-gray-300 text-sm font-bold rounded-xl flex items-center justify-center gap-2 border border-white/5 hover:bg-white/10 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  Download Certificate
                </button>
              </>
            ) : (
              <div className="text-center py-10 opacity-60">
                <Icon name="info" />
                <p className="mt-2 text-sm text-gray-400">No active warranty at the moment.</p>
              </div>
            )}
          </div>

          {/* Service History */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF5C35]/10 rounded-xl flex items-center justify-center text-xl text-[#FF5C35]">
                  <Icon name="history" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Recent Services</h3>
              </div>
            </div>

            <div className="space-y-4 flex-grow max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {/* Note: In a real app, history would be fetched via another endpoint or part of /me */}
              {/* We fallback to SERVICE_HISTORY for visual completeness until backend supports it */}
              {SERVICE_HISTORY.slice(0, 3).map((item) => (
                <div key={item.id} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-[#FF5C35]/30 transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm text-gray-200">{item.service}</h4>
                    <span className="text-[#FF5C35] text-xs font-bold px-2 py-0.5 bg-[#FF5C35]/10 rounded-full">+{item.points} pts</span>
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
            { label: 'Total Services', value: '3', icon: 'emoji_events' },
            { label: 'Coverage Years', value: warranty.coverage_years.toString(), icon: 'shield' },
            { label: 'Total Points', value: loyalty.total_points.toLocaleString(), icon: 'redeem' },
            { label: 'Total Spent', value: `${stats.currency} ${stats.total_spent.toLocaleString()}`, icon: 'trending_up' }
          ].map((stat, i) => (
            <div key={i} className="bg-[#262626] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center group hover:border-[#FF5C35]/50 transition-all">
              <div className="text-2xl mb-6 opacity-60 group-hover:opacity-100 transition-opacity text-[#FF5C35]">
                <Icon name={stat.icon} />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold mb-1 text-gray-200">{stat.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <GiftPointsModal 
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
        onConfirm={handleGift}
        isLoading={giftMutation.isPending}
      />
    </div>
  );
};

export default DashboardView;
