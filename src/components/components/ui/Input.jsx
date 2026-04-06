import React from 'react';

const Input = ({
  label,
  error,
  className = '',
  type = 'text',
  ...props
}) => {
  const baseClasses = `
    w-full bg-[#111111] border rounded-xl px-4 py-3 text-sm text-white
    focus:outline-none transition-all
    ${error
      ? 'border-red-500 focus:border-red-500'
      : 'border-white/10 focus:border-[#FF5C35]'
    }
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-bold text-gray-400 mb-2 tracking-wide">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${baseClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

const Select = ({
  label,
  error,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = `
    w-full bg-[#111111] border rounded-xl px-4 py-3 text-sm text-white
    focus:outline-none transition-all appearance-none cursor-pointer
    ${error
      ? 'border-red-500 focus:border-red-500'
      : 'border-white/10 focus:border-[#FF5C35]'
    }
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-bold text-gray-400 mb-2 tracking-wide">
          {label}
        </label>
      )}
      <select className={`${baseClasses} ${className}`} {...props}>
        {children}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export { Input, Select };