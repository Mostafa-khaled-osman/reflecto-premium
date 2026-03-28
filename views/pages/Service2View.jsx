
import React, { useState } from 'react';

const Service2View = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  return (
    <div className="min-h-screen bg-[#1a1a1a] pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center py-12 mb-8">
          <h1 className="text-3xl md:text-5xl font-display font-light text-white tracking-tight">
            Welcome to <span className="font-bold">Omar in</span> <span className="text-[#FF5C35] font-bold italic">Services</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <img src="/assets/photo/window-tint.jpg" alt="G-Wagon" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="bg-[#262626] p-10 rounded-3xl border border-white/5">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter uppercase leading-tight">Window Tint Protection</h2>
            <p className="text-gray-400 text-sm mb-10 leading-relaxed">Advanced nano-ceramic technology that reduces heat, blocks UV rays, and enhances driving comfort.</p>
            <div className="space-y-8">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-xs font-bold uppercase text-gray-400">Select Tint Level</span>
                <span className="text-[10px] bg-[#FF5C35]/20 text-[#FF5C35] px-2 py-0.5 rounded-full font-bold uppercase">Premium Film</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-bold text-gray-500">
                {['Light 70%', 'Light 65%', 'Medium 50%', 'Dark 30%'].map(l => (
                  <div key={l} className={`py-2 rounded-lg border border-white/5 transition-all cursor-pointer ${l.includes('50%') ? 'bg-[#FF5C35] text-white border-[#FF5C35]' : 'hover:bg-white/5'}`}>{l}</div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Heat Reduction', val: '85%' },
                  { label: 'UV Protection', val: '99%' },
                  { label: 'Privacy Level', val: '72%' },
                  { label: 'Protection', val: '33%' }
                ].map(s => (
                  <div key={s.label}>
                    <div className="flex justify-between text-[10px] mb-1"><span className="text-gray-500">{s.label}</span><span className="text-white font-bold">{s.val}</span></div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#FF5C35]" style={{ width: s.val }}></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-32">
          <span className="text-[#FF5C35] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Visual Guide</span>
          <h2 className="text-5xl font-display font-100 mb-14 tracking-tighter w-full h-[37px]"><span className="text-[#FF5C35]">Transparency</span> Scale (VLT)</h2>
          <p className="text-gray-400 text-sm mb-10 leading-relaxed w-[38%] mx-auto">Visible Light Transmission (VLT) percentages determine how dark
            your tint appears.</p>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { p: '5%', l: 'Limo Tint' },
              { p: '20%', l: 'Dark' },
              { p: '35%', l: 'Medium' },
              { p: '50%', l: 'Light' },
              { p: '70%', l: 'Clear' }
            ].map((item, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-[140px] h-[140px] rounded-full border-2 border-white/100 mb-4 p-1 group-hover:border-[#FF5C35] transition-all bg-[url('/assets/photo/view-3d-car.jpg')] bg-cover">
                  <div className="w-full h-full rounded-full flex items-center justify-center" style={{ opacity: (parseInt(item.p) / 100) }}></div>
                </div>
                <div className="text-xl font-display font-bold mb-1">{item.p}</div>
                <div className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{item.l}</div>
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

        {/* why choose us */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="bg-gradient-to-b from-[#2a1b18] to-[#1a1a1a] p-10 rounded-3xl border border-[#FF5C35]/30">
            <div className="flex justify-between mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-1">Thermal Tint</h3>
                <p className="text-[10px] text-gray-500 font-medium">Nano-Ceramic Film</p>
              </div>
              <span className="bg-[#FF5C35] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase h-fit">Recommended</span>
            </div>
            <ul className="space-y-4 mb-10 text-xs text-gray-400 font-medium">
              {['Maximum heat rejection', '99% UV protection', 'Clear visibility', 'Long lifespan', 'Premium finish'].map(f => (
                <li key={f} className="flex items-center gap-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>{f}</li>
              ))}
            </ul>
            <div className="space-y-4">
              {[
                { l: 'Heat Block', v: '95%' },
                { l: 'UV Protection', v: '99%' },
                { l: 'Privacy', v: '70%' }
              ].map(s => (
                <div key={s.l}>
                  <div className="flex justify-between text-[10px] mb-1 text-gray-500"><span>{s.l}</span><span className="text-white font-bold">{s.v}</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full"><div className="h-full bg-[#FF5C35]" style={{ width: s.v }}></div></div>
                </div>
              ))}
            </div>
            <button className="w-full py-3 mt-10 bg-[#FF5C35] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d64a28] transition-all">Book Service</button>
          </div>

          <div className="bg-[#262626] p-10 rounded-3xl border border-white/5 opacity-80">
            <div className="flex justify-between mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-1 text-gray-300">Regular Tint</h3>
                <p className="text-[10px] text-gray-600 font-medium uppercase">Dyed Film</p>
              </div>
            </div>
            <ul className="space-y-4 mb-10 text-xs text-gray-500 font-medium">
              {['Basic heat reduction', 'Standard UV protection', 'Dark appearance', 'Budget friendly'].map(f => (
                <li key={f} className="flex items-center gap-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700"><path d="M20 6 9 17l-5-5" /></svg>{f}</li>
              ))}
            </ul>

            <div className="space-y-4">
              {[
                { l: 'Heat Block', v: '55%' },
                { l: 'UV Protection', v: '70%' },
                { l: 'Privacy', v: '80%' }
              ].map(s => (
                <div key={s.l}>
                  <div className="flex justify-between text-[10px] mb-1 text-gray-600"><span>{s.l}</span><span className="text-gray-400 font-bold">{s.v}</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full"><div className="h-full bg-gray-500" style={{ width: s.v }}></div></div>
                </div>
              ))}
              <button className="w-full py-3 mt-10 bg-[#FF5C35] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d64a28] transition-all">Book Service</button>
            </div>
          </div>
          <div className="bg-[#262626] p-10 rounded-3xl border border-white/5 opacity-80">
            <div className="flex justify-between mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-1 text-gray-300">Regular Tint</h3>
                <p className="text-[10px] text-gray-600 font-medium uppercase">Dyed Film</p>
              </div>
            </div>
            <ul className="space-y-4 mb-10 text-xs text-gray-500 font-medium">
              {['Basic heat reduction', 'Standard UV protection', 'Dark appearance', 'Budget friendly'].map(f => (
                <li key={f} className="flex items-center gap-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700"><path d="M20 6 9 17l-5-5" /></svg>{f}</li>
              ))}
            </ul>

            <div className="space-y-4">
              {[
                { l: 'Heat Block', v: '55%' },
                { l: 'UV Protection', v: '70%' },
                { l: 'Privacy', v: '80%' }
              ].map(s => (
                <div key={s.l}>
                  <div className="flex justify-between text-[10px] mb-1 text-gray-600"><span>{s.l}</span><span className="text-gray-400 font-bold">{s.v}</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full"><div className="h-full bg-gray-500" style={{ width: s.v }}></div></div>
                </div>
              ))}
              <button className="w-full py-3 mt-10 bg-[#FF5C35] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d64a28] transition-all">Book Service</button>
            </div>
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
      </div>
    </div>
  );
};

export default Service2View;
