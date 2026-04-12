import React from 'react';

const ClientCard = ({
  name,
  role,
  status,
  company,
  email,
  avatarUrl,
  isActiveStatus,
  gradientColorClass
}) => {
  return (
    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-outline-variant/10">
      <div className="h-24 bg-surface-container-low relative overflow-hidden">
        {gradientColorClass && (
          <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${gradientColorClass} to-transparent`}></div>
        )}
      </div>
      <div className="px-6 pb-6 -mt-10 relative">
        <img
          alt="Client Profile"
          className="w-20 h-20 rounded-2xl object-cover border-4 border-surface-container-lowest shadow-md mb-4 group-hover:scale-105 transition-transform"
          src={avatarUrl}
        />
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline font-bold text-lg leading-tight group-hover:text-on-tertiary-container transition-colors text-white">
              {name}
            </h3>
            <p className="text-sm font-body text-on-surface-variant mt-1 text-gray-300">{role}</p>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
              isActiveStatus
                ? 'bg-[#e4e2e1] text-[#1b1c1c]'
                : 'bg-[#2a2a2a] text-[#e3beb8]'
            }`}
          >
            {status}
          </span>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="material-symbols-outlined text-[18px]" data-icon="business">
              business
            </span>
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="material-symbols-outlined text-[18px]" data-icon="mail">
              mail
            </span>
            <span>{email}</span>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-[#1c1b1b] flex gap-2">
          <button className="flex-1 py-2 rounded-lg bg-[#1c1b1b] font-bold text-xs text-[#ffb4a7] hover:bg-[#201f1f] transition-colors">
            Edit
          </button>
          <button className="flex-1 py-2 rounded-lg ink-pool-gradient text-white font-bold text-xs active:scale-95 transition-transform">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
