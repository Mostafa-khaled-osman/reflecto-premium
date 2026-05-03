import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../services/api';
import { useToast } from '../contexts/ToastContext';
import Icon from '../components/Icon';

const LoginView = () => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setPhone: savePhone } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const trimmed = phone.trim();
    if (!trimmed) {
      toast.warning('Please enter your phone number');
      return;
    }

    setIsLoading(true);
    try {
      const res = await authService.sendOTP(trimmed);

      // Save phone to context for OTP page
      savePhone(trimmed);

      // In dev mode, show the OTP code from the response
      if (res.dev_otp) {
        toast.info(`Dev OTP: ${res.dev_otp}`, 10000);
      } else {
        toast.success(res.message || 'OTP sent successfully');
      }

      navigate('/otp');
    } catch (err) {
      toast.error(err.message || 'Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <div className="w-16 h-16 bg-[#FF5C35]/10 border border-[#FF5C35]/30 rounded-2xl flex items-center justify-center text-2xl text-[#FF5C35] mx-auto mb-10">
          <Icon name="shield" />
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
          CLIENT <span className="text-[#FF5C35]">DASHBOARD</span>
        </h1>
        <p className="text-gray-400 mb-12 font-light">Access your service history and rewards</p>

        <div className="bg-[#262626] p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FF5C35] blur-[120px] opacity-20 transition-opacity group-hover:opacity-30"></div>

          <div className="text-left mb-8">
            <label className="block text-sm font-bold text-gray-200 mb-3">Phone Number</label>
            <div className="relative">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#FF5C35] transition-all"
                placeholder="+966 501234567"
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full py-5 bg-[#FF5C35] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send OTP
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;