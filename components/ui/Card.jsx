import React from 'react';

const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  ...props
}) => {
  const variants = {
    default: 'bg-[#1a1a1a] border border-white/5',
    elevated: 'bg-[#262626] border border-white/5',
    highlighted: 'bg-[#1a1a1a] border border-[#FF5C35]/50',
    outline: 'bg-transparent border border-white/10',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        rounded-2xl relative overflow-hidden
        ${variants[variant]}
        ${paddings[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;