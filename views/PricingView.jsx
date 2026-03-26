
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRICING_TIERS } from '../constants';

const PricingView = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="px-4 py-1 rounded-full border border-[#FF5C35] text-[#FF5C35] text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Premium Packages</span>
          <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tighter mb-4 leading-tight">
            TRANSPARENT <span className="text-[#FF5C35]">PRICING</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Choose the perfect package for your vehicle. All prices include materials, labor, and warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative p-10 rounded-3xl border ${tier.isPopular ? 'bg-gradient-to-b from-[#2a1b18] to-[#1a1a1a] border-[#FF5C35]/50 scale-105 z-10' : 'bg-[#1a1a1a] border-white/5'
                } transition-all duration-500`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF5C35] text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-xl mb-6 ${tier.isPopular ? 'text-[#FF5C35]' : 'text-gray-400'}`}>
                  {tier.id === 'basic' ? '🛡️' : tier.id === 'silver' ? '⭐' : '💎'}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{tier.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-sm">starting at</span>
                  <span className="text-4xl font-display font-bold">{tier.price}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/Contact')}
                className={`w-full py-4 rounded-xl font-bold transition-all mb-10 ${tier.isPopular ? 'bg-[#FF5C35] text-white shadow-lg shadow-[#FF5C35]/20' : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
              >
                Select {tier.name}
              </button>

              <div className="space-y-4">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="text-center max-w-4xl mx-auto py-20 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Flexible <span className="text-[#FF5C35]">Payment</span> Options
          </h2>
          <p className="text-gray-400 mb-10">Buy now pay later with Tamara & Tabby, split your payment into interest-free installments.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Tamara', 'Tabby', 'Credit Card', 'Bank Transfer'].map(p => (
              <div key={p} className="px-8 py-4 border border-white/10 rounded-xl text-white font-bold hover:border-[#FF5C35]/40 transition-all cursor-pointer">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingView;
