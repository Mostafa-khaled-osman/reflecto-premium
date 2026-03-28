
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../constants';

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/photo/landing-page.jpeg"
            className="w-full h-full object-cover opacity-40 "
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl tracking-[2px] md:text-7xl font-display font-bold tracking-tighter mb-4 leading-tight">
            PREMIUM CAR <br />
            <span className="text-[#FF5C35]">PROTECTION</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light font-michroma">
            Transform your vehicle with military-grade protection and showroom finish
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/Contact')}
              className="w-full sm:w-auto px-10 py-4 bg-[#FF5C35] text-white font-bold rounded flex items-center justify-center gap-2 group hover:brightness-110 transition-all rounded-2xl"
            >
              Book Your Service
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6" /></svg>
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="w-full sm:w-auto px-10 py-4 border border-[#FF5C35] hover:border-white/40 text-white font-bold rounded flex items-center justify-center gap-2 transition-all rounded-2xl"
            >
              Explore Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-[#FF5C35] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="text-[#FF5C35]">Services</span>
            </h2>
            <p className="text-gray-400 text-lg"><span className='text-[#FF5C35]'>Premium</span> protection packages tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-[#262626] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FF5C35]/50 transition-all">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#FF5C35] p-2 rounded-lg shadow-xl">
                    <span className="text-xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map(f => (
                      <li key={f} className="text-xs text-gray-300 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#FF5C35] font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-32 px-6 bg-[#262626]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              The <span className="text-[#FF5C35]">Reflecto</span> Standard
            </h2>
            <p className="text-gray-400">Why thousands of car enthusiasts trust us with their vehicles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { title: 'ISO-Certified Dust-Free Environment', icon: '🛡️' },
              { title: '10-Year Comprehensive Warranty', icon: '⏱️' },
              { title: 'US & Canadian Premium Materials Only', icon: '🇺🇸' },
              { title: 'Certified Master Installers', icon: '✅' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#262626] p-8 border border-white/5 rounded-xl flex items-center gap-6 group hover:border-[#FF5C35]/30 transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 text-2xl group-hover:bg-[#FF5C35]/10 transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-gray-200">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/Contact')}
              className="w-full sm:w-auto px-10 py-4 bg-[#FF5C35] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 transition-all"
            >
              Get Started Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="w-full sm:w-auto px-10 py-4 border border-[#FF5C35] hover:border-white/40 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              View Pricing
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
