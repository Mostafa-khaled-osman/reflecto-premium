import React from 'react';
import { Link } from 'react-router-dom';

const ClientCard = ({
  id,
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
    <div className="group bg-[#1a1a1a] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(255,92,53,0.08)] transition-all duration-300 border border-white/5 hover:border-[#FF5C35]/30">
      <div className="h-24 bg-[#262626] relative overflow-hidden">
        {gradientColorClass && (
          <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${gradientColorClass} to-transparent`}></div>
        )}
      </div>
      <div className="px-6 pb-6 -mt-10 relative">
        <div className="w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center text-3xl font-bold text-white border-4 border-[#1a1a1a] shadow-md mb-4 group-hover:scale-105 transition-transform overflow-hidden">
          {avatarUrl ? (
            <img alt="Client Profile" className="w-full h-full object-cover" src={avatarUrl} />
          ) : (
            <span className="opacity-50">{name ? name.charAt(0).toUpperCase() : '?'}</span>
          )}
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline font-bold text-lg leading-tight group-hover:text-[#FF5C35] transition-colors text-white">
              {name || 'Unknown Client'}
            </h3>
            <p className="text-sm font-body mt-1 text-gray-400">{role}</p>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
              isActiveStatus
                ? 'bg-green-500/20 text-green-500'
                : 'bg-gray-500/20 text-gray-400'
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
            <span className="truncate">{company}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="material-symbols-outlined text-[18px]" data-icon="mail">
              call
            </span>
            <span className="truncate">{email}</span>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 flex gap-2">
          <Link to={`/admin/edit-client?id=${id}`} className="flex-1 py-2 rounded-lg bg-white/5 font-bold text-xs text-[#FF5C35] hover:bg-white/10 transition-colors text-center border border-white/5 hover:border-[#FF5C35]/30">
            Edit
          </Link>
          <Link to={`/admin/edit-client?id=${id}`} className="flex-1 py-2 rounded-lg bg-[#FF5C35] text-white font-bold text-xs active:scale-95 transition-transform text-center hover:brightness-110 shadow-lg shadow-[#FF5C35]/20">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
