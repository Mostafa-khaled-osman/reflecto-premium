import React from 'react';

const StatCard = ({
  label,
  value,
  trend,
  icon,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-[#141414] border-white/5',
    highlighted: 'bg-[#141414] border-[#FF5C35]/50',
    success: 'bg-green-500/10 border-green-500/20',
    warning: 'bg-yellow-500/10 border-yellow-500/20',
  };

  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-400',
  };

  const getTrendDirection = (trendText) => {
    if (!trendText) return 'neutral';
    if (trendText.startsWith('+') || trendText.includes('increase') || trendText.includes('up')) {
      return 'up';
    }
    if (trendText.startsWith('-') || trendText.includes('decrease') || trendText.includes('down')) {
      return 'down';
    }
    return 'neutral';
  };

  return (
    <div
      className={`p-6 lg:p-8 rounded-2xl border ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-4">
        {label}
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      {trend && (
        <div className={`text-[10px] flex items-center gap-1 ${trendColors[getTrendDirection(trend)]}`}>
          {getTrendDirection(trend) === 'up' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          )}
          {getTrendDirection(trend) === 'down' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
              <polyline points="17 18 23 18 23 12" />
            </svg>
          )}
          {trend}
        </div>
      )}
    </div>
  );
};

export default StatCard;