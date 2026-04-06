import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Icon from '../components/Icon';

const OTPView = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);
  const { login, phone } = useAuth();

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length !== 6) return;
    login(phone);
    window.location.href = '/admin';
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
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FF5C35] blur-[120px] opacity-20"></div>

          <div className="text-left mb-10">
            <h3 className="font-bold text-gray-200 mb-1">Enter OTP Code</h3>
            <p className="text-gray-500 text-sm">We've sent a 6-digit code to {phone?.slice(-5) || 'your phone'}</p>
          </div>

          <div className="flex justify-between gap-2 sm:gap-3 mb-10">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => { inputs.current[idx] = el; }}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-full aspect-square bg-[#1a1a1a] border border-white/10 rounded-xl text-center text-2xl font-bold focus:outline-none focus:border-[#FF5C35] transition-all"
                maxLength={1}
              />
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-5 bg-[#FF5C35] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all mb-8"
          >
            Verify & login
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          <Link
            to="/login"
            className="text-gray-500 text-sm hover:text-white transition-colors"
          >
            Change phone number
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OTPView;