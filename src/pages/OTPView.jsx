import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../services/api';
import { useToast } from '../contexts/ToastContext';
import Icon from '../components/Icon';

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 300; // 5 minutes in seconds

const OTPView = () => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(RESEND_COOLDOWN);
  const inputs = useRef([]);
  const { phone, login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if no phone in context (user navigated directly)
  useEffect(() => {
    if (!phone) {
      navigate('/login', { replace: true });
    }
  }, [phone, navigate]);

  // Resend countdown timer
  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (pasted.length === 0) return;

    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOtp(newOtp);

    // Focus the next empty input or the last one
    const nextIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputs.current[nextIndex]?.focus();
  };

  const handleSubmit = async () => {
    const code = otp.join('');
    if (code.length !== OTP_LENGTH) {
      toast.warning('Please enter the full 6-digit code');
      return;
    }

    setIsLoading(true);
    try {
      const res = await authService.verifyOTP(phone, code);

      // Save tokens + user in AuthContext & localStorage
      login({
        access_token: res.access_token,
        refresh_token: res.refresh_token,
        user: res.user,
      });

      toast.success(`Welcome back, ${res.user?.full_name || 'User'}!`);

      // Role-based redirect
      if (res.user?.role === 'admin') {
        navigate('/admin', { replace: true });
      } else {
        navigate('/clientDashboard', { replace: true });
      }
    } catch (err) {
      toast.error(err.message || 'Invalid OTP code. Please try again.');
      // Clear OTP inputs on error
      setOtp(Array(OTP_LENGTH).fill(''));
      inputs.current[0]?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;

    try {
      const res = await authService.sendOTP(phone);
      setResendTimer(RESEND_COOLDOWN);

      if (res.dev_otp) {
        toast.info(`Dev OTP: ${res.dev_otp}`, 10000);
      } else {
        toast.success('A new code has been sent');
      }
    } catch (err) {
      toast.error(err.message || 'Failed to resend OTP');
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const maskedPhone = phone ? `****${phone.slice(-4)}` : 'your phone';

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
            <p className="text-gray-500 text-sm">We've sent a 6-digit code to {maskedPhone}</p>
          </div>

          <div className="flex justify-between gap-2 sm:gap-3 mb-10">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => { inputs.current[idx] = el; }}
                type="text"
                inputMode="numeric"
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onPaste={idx === 0 ? handlePaste : undefined}
                className="w-full aspect-square bg-[#1a1a1a] border border-white/10 rounded-xl text-center text-2xl font-bold focus:outline-none focus:border-[#FF5C35] transition-all disabled:opacity-50"
                maxLength={1}
                disabled={isLoading}
              />
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full py-5 bg-[#FF5C35] text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-[#FF5C35]/20 hover:brightness-110 transition-all mb-6 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                Verify & login
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </>
            )}
          </button>

          <div className="flex items-center justify-between">
            <Link
              to="/login"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Change phone number
            </Link>

            <button
              onClick={handleResend}
              disabled={resendTimer > 0}
              className="text-sm transition-colors disabled:text-gray-600 disabled:cursor-not-allowed text-[#FF5C35] hover:text-[#ff8060]"
            >
              {resendTimer > 0
                ? `Resend in ${formatTime(resendTimer)}`
                : 'Resend OTP'
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPView;