import React from 'react';

const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  labelPosition = 'top',
  className = '',
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const variants = {
    default: 'bg-[#FF5C35]',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };

  return (
    <div className={`w-full ${className}`} {...props}>
      {showLabel && labelPosition === 'top' && (
        <div className="flex justify-between text-xs mb-2">
          <span className="text-gray-400">{props.label || 'Progress'}</span>
          <span className="text-[#FF5C35] font-bold">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-white/5 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${variants[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && labelPosition === 'bottom' && (
        <div className="flex justify-between text-xs mt-2">
          <span className="text-gray-400">{props.label || 'Progress'}</span>
          <span className="text-[#FF5C35] font-bold">{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;