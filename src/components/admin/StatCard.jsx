import React from 'react';

const StatCard = ({ title, value, icon, trendText, isSpecial, description }) => {
  if (isSpecial) {
    return (
      <div className="md:col-span-1 lg:col-span-2 bg-[#e4e2e1] p-6 rounded-xl relative overflow-hidden flex flex-col justify-center">
        <div className="relative z-10">
          <h4 className="text-[#1b1c1c] font-bold font-headline text-xl">{title}</h4>
          <p className="text-[#474747] text-sm mt-1 max-w-[240px]">{description}</p>
        </div>
        <span
          className="absolute -right-8 -bottom-8 material-symbols-outlined text-[160px] opacity-10 text-[#1b1c1c] pointer-events-none"
          data-icon={icon}
        >
          {icon}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-[#0e0e0e] p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-2">
      <span className="text-xs font-bold uppercase tracking-widest text-[#e3beb8]">{title}</span>
      <span className="text-3xl font-black font-headline text-white">{value}</span>
      <div className="flex items-center gap-1 text-[#5a0500] font-bold text-xs mt-2">
        <span className="material-symbols-outlined text-sm" data-icon={icon}>
          {icon}
        </span>
        {trendText}
      </div>
    </div>
  );
};

export default StatCard;
