import React from 'react';

const variants = {
  primary: 'bg-[#FF5C35] text-white hover:brightness-110 shadow-lg shadow-[#FF5C35]/20',
  secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10',
  outline: 'border border-[#FF5C35] text-[#FF5C35] hover:bg-[#FF5C35] hover:text-white',
  ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-10 py-4 text-base',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon,
  ...props
}) => {
  return (
    <button
      className={`
        font-bold rounded-xl flex items-center justify-center gap-2
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        icon
      ) : null}
      {children}
    </button>
  );
};

export default Button;