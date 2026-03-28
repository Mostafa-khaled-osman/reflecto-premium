import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Service1View = () => {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState('sedan');
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="min-h-screen bg-[#1a1a1a] pb-20 font-sans text-white">
      {/* Header */}
      <div className="text-center py-10 pb-6 border-b border-white/5 bg-[#141414]">
        <h1 className="text-2xl md:text-4xl font-light tracking-widest text-gray-300">
          <span className="text-[#FF5C35]">Welcome to</span> Omar <span className="text-[#FF5C35]">in</span> Services
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="w-full relative rounded-2xl overflow-hidden border border-[#FF5C35]/30 shadow-2xl shadow-[#FF5C35]/10">
            <img
              src="/assets/photo/nano-services.jpg"
              alt="Thermal Defense Car Heatmap"
              className="w-full h-full object-cover aspect-[4/3] mix-blend-screen"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800"; e.target.className = "w-full h-full object-cover aspect-[4/3] grayscale" }}
            />
          </div>

          <div className="bg-[#121212] p-8 rounded-2xl border border-white/5 flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold mb-4 tracking-tighter uppercase text-white">Thermal Defense</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
              Nano-ceramic window tint technology providing superior infrared rejection and UV protection without compromising visibility.
            </p>

            {/* Vehicle Selector */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setVehicleType('suv')}
                className={`flex-1 py-3 text-xs md:text-sm font-bold tracking-widest uppercase rounded-lg border transition-all ${vehicleType === 'suv' ? 'bg-[#262626] border-white/20 text-white' : 'border-white/5 text-gray-500 hover:text-white hover:border-white/10'}`}
              >
                SUV
              </button>
              <button
                onClick={() => setVehicleType('sedan')}
                className={`flex-1 py-3 text-xs md:text-sm font-bold tracking-widest uppercase rounded-lg border transition-all ${vehicleType === 'sedan' ? 'bg-[#262626] border-white/20 text-white' : 'border-white/5 text-gray-500 hover:text-white hover:border-white/10'}`}
              >
                SEDAN
              </button>
              <button
                onClick={() => setVehicleType('service3')}
                className={`flex-1 py-3 text-xs md:text-sm font-bold tracking-widest uppercase rounded-lg border transition-all ${vehicleType === 'service3' ? 'bg-[#262626] border-white/20 text-white' : 'border-white/5 text-gray-500 hover:text-white hover:border-white/10'}`}
              >
                SERVICE 3
              </button>
            </div>

            {/* Competition Graph */}
            <div className="bg-[#0a0a0a] rounded-xl p-6 border border-white/5 mt-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">COMPETITION</span>
                <span className="text-[10px] font-bold text-[#FF5C35] tracking-[0.2em] uppercase bg-[#FF5C35]/10 px-3 py-1 rounded">IR REJECTION</span>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Reflecto', val: 98, color: 'bg-[#FF5C35]' },
                  { label: 'Brand X', val: 64, color: 'bg-[#FF5C35]/60' },
                  { label: 'Brand Y', val: 42, color: 'bg-[#FF5C35]/30' }
                ].map(stat => (
                  <div key={stat.label} className="grid grid-cols-[80px_1fr_40px] items-center gap-4 text-xs">
                    <span className="text-gray-400 font-medium">{stat.label}</span>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.val}%` }}></div>
                    </div>
                    <span className="text-white font-bold text-right">{stat.val}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Polishing Intensity Section */}
        <div className="text-center mb-24">
          <h2 className="text-xl md:text-3xl font-display font-light mb-2 tracking-wide text-gray-300">
            <span className="text-[#FF5C35]">Polishing</span> Intensity <span className="text-[#FF5C35]">Levels</span> Using <span className="text-[#FF5C35]">Nano</span>
          </h2>
          <div className="flex justify-center mb-12">
            <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-md">From a light gloss enhancement to complete multi-stage restoration, we offer
              varying levels of correction to suit your vehicle's needs.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-32">
            {[
              { title: 'LIGHT POLISH', icon: '1' },
              { title: 'MEDIUM CORRECTION', icon: '2' },
              { title: 'DEEP CORRECTION', icon: '3' }
            ].map((level, i) => (
              <div key={level.title} className="flex flex-col items-center group">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMzMzIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHg9IjQiIHk9IjQiIGZpbGw9IiMzMzMiPjwvcmVjdD4KPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iNCIgeD0iMCIgeT0iNCIgZmlsbD0iIzIyMiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4PSI0IiB5PSIwIiBmaWxsPSIjMjIyIj48L3JlY3Q+Cjwvc3ZnPg==')] rounded-full border border-white/10 mb-6 flex items-center justify-center text-4xl font-display font-bold text-white/20 group-hover:border-[#FF5C35] transition-all overflow-hidden relative">
                  {/* Placeholder for actual polishing images, currently showing a checkerboard pattern for empty effect */}
                </div>
                <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">{level.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Visual Impact Section */}
        <div className="text-center mb-32">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 tracking-tighter text-gray-300">
            Visual <span className="text-[#FF5C35]">Impact</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            See the difference our premium products make on your vehicle's interior and exterior.
          </p>

          <div
            className="relative max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 select-none"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
              setSliderPosition((x / rect.width) * 100);
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
              setSliderPosition((x / rect.width) * 100);
            }}
          >
            {/* Background Image (After - Right Side) */}
            <div className="absolute inset-0">
              <img src="/assets/photo/after.png" alt="Exterior" className="w-full h-full object-cover" />
              <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#111]/80 backdrop-blur-md rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">After</div>
            </div>

            {/* Foreground Image (Before - Left Side) */}
            <div
              className="absolute inset-0 border-r-2 border-white shadow-[10px_0_15px_-3px_rgba(0,0,0,0.5)]"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img src="/assets/photo/landing services.jpeg" alt="Interior" className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#111]/80 backdrop-blur-md rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">Before</div>
            </div>

            {/* Slider Center Pill */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none flex items-center justify-center z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-[#FF5C35] rounded-full flex items-center justify-center shadow-lg text-white border-2 border-white -ml-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-3"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>

            {/* Range Input for accessibility and easier interaction on mobile */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>
        </div>

        {/* 4. Packages Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-light text-gray-300">
              <span className="text-[#FF5C35]">Select</span> Your <span className="text-[#FF5C35] font-bold">Package</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((pkg) => (
              <div key={pkg} className="bg-[#141414] rounded-2xl overflow-hidden border border-white/5 flex flex-col group hover:border-[#FF5C35]/50 transition-all shadow-xl">
                <div className="h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMzMzIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHg9IjQiIHk9IjQiIGZpbGw9IiMzMzMiPjwvcmVjdD4KPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iNCIgeD0iMCIgeT0iNCIgZmlsbD0iIzIyMiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4PSI0IiB5PSIwIiBmaWxsPSIjMjIyIj48L3JlY3Q+Cjwvc3ZnPg==')] flex-shrink-0">
                  {/* Placeholder image area */}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-end mb-6 border-b border-white/5 pb-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">Enhancement</h3>
                    <span className="text-xl font-display font-bold text-white">$350+</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      'Deep Wheel Cleaning',
                      'Quality Hand Wash',
                      '1 Stage Correction',
                      'Interior Sanitation',
                      'No Paint Prep'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[11px] text-gray-400 leading-snug">
                        <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('/Contact')}
                    className="w-full py-3 bg-[#FF5C35] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:brightness-110 transition-all shadow-lg shadow-[#FF5C35]/20 mt-auto"
                  >
                    SELECT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. About Us / Technology Section */}
        <div className="mb-20 pt-10 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-light text-gray-300">
              About <span className="text-[#FF5C35] font-bold italic">Us</span>
            </h2>
          </div>

          <div className="bg-[#121212] p-8 md:p-12 rounded-3xl border border-white/5">
            {/* Top half: PPF Anatomy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h3 className="text-3xl font-display tracking-tighter mb-4 text-white">
                  <span className="text-[#FF5C35] font-bold">PPF</span> ANATOMY
                </h3>
                <p className="text-gray-400 text-xs mb-10 max-w-sm leading-relaxed">
                  10-mil thermoplastic urethane engineered for extreme impact resistance. Invisible armor for your vehicle's most vulnerable surfaces.
                </p>

                <div className="space-y-8 pl-4 border-l border-white/10">
                  {[
                    { title: 'Self-Healing Top Coat', desc: 'Elastomeric polymers heal scratches with heat' },
                    { title: 'Impact Core', desc: 'Absorbs rock chips and road debris energy' },
                    { title: 'Nano-Adhesive', desc: 'Repositionable, non-yellowing bonding agent' }
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#FF5C35]"></div>
                      <h4 className="font-bold text-gray-200 text-sm mb-1">{item.title}</h4>
                      <p className="text-[10px] text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center relative bg-[#0a0a0a] rounded-2xl p-4 overflow-hidden border border-white/5">
                {/* Decorative Layer Stack Image Simulation */}
                <img src="/assets/photo/nano servicesss.jpg" className="w-[80%] rounded-xl object-cover mix-blend-screen opacity-80" alt="Film Stack Layers" />

                {/* Fake Labels pointing to stack */}
                <div className="absolute top-1/4 right-[10%] text-right">
                  <div className="text-[8px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1">Self-Healing<br />Top Coat</div>
                </div>
                <div className="absolute top-1/2 right-[10%] text-right mt-4">
                  <div className="text-[8px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1">Impact-Resistant<br />Urethane Core</div>
                </div>
                <div className="absolute bottom-1/4 left-[10%] text-left pb-4">
                  <div className="text-[8px] font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1">Automotive Grade<br />Adhesive Base</div>
                </div>
              </div>
            </div>

            {/* Bottom half: Nano Ceramic Stack */}
            <div className="max-w-3xl mx-auto pt-10 border-t border-white/5">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-light mb-4">
                  <span className="text-[#FF5C35] font-bold">NANO</span> CERAMIC STACK
                </h3>
                <p className="text-[10px] text-gray-500 max-w-lg mx-auto leading-relaxed">
                  A multi-layer defense system molecularly bonded to your vehicle's paint, ensuring long-lasting gloss and protection.
                </p>
              </div>

              <div className="space-y-2 mb-12">
                <div className="w-full py-4 text-center border border-white/10 rounded bg-[#1a1a1a] text-xs font-bold text-gray-400">Vehicle Clear Coat</div>
                <div className="w-full py-4 text-center border border-white/10 rounded bg-[#1a1a1a] text-xs font-bold text-gray-400">9H Base Layer 1</div>
                <div className="w-full py-4 text-center border border-white/10 rounded bg-[#1a1a1a] text-xs font-bold text-gray-400">9H Base Layer 2</div>
                <div className="w-full py-4 text-center border border-[#FF5C35]/40 rounded bg-[#FF5C35]/10 text-[#FF5C35] text-xs font-bold flex items-center justify-center gap-2 relative">
                  <span className="absolute left-4">✦</span>
                  Top Coat (Hydrophobic)
                  <span className="absolute right-4">✦</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Hydrophobic', desc: 'Repels water & dirt' },
                  { title: 'Advanced Finish', desc: 'Improves gloss levels' },
                  { title: 'UV Penalty', desc: 'Prevents color fading' }
                ].map((feat, i) => (
                  <div key={i} className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5 text-center flex flex-col items-center">
                    <div className="text-sm font-bold text-gray-200 mb-1">{feat.title}</div>
                    <div className="text-[10px] text-gray-500">{feat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1View;
