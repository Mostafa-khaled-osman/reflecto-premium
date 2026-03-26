
import React, { useState } from 'react';

const Service3View = () => {
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
          <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative h-full">
            <img src="/photo/landing  services.jpg" alt="Polishing" className="w-full h-[570px] object-cover" />
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[10px] font-bold uppercase">Before / After</div>
          </div>
          <div className="bg-[#262626] p-10 rounded-3xl border border-white/5">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter uppercase leading-tight">Car Polishing & Paint Correction</h2>
            <p className="text-gray-400 text-sm mb-10 leading-relaxed">Restore your vehicle's showroom shine with our multi-stage paint correction process that removes swirls, scratches, and oxidation.</p>
            <div className="flex justify-between items-center mb-4">
              <p className='text-white font-bold uppercase'>select tint level</p>
              <p className='text-[#FF5C35] bg-[#FF5C35]/20 px-2 py-0.5 rounded-full font-bold uppercase border-2 border-[#FF5C35]'>premium film technology</p>
            </div>
            <div className="bg-white/5 p-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-bold mb-10 rounded-2xl text-gray-500">
              {['Light 70%', 'Light 65%', 'Medium 50%', 'Dark 30%'].map(l => (
                <div key={l} className={`py-2 rounded-full transition-all cursor-pointer ${l.includes('50%') ? 'bg-[#FF5C35] text-white border-[#FF5C35]' : 'hover:bg-white/5 '}`}>{l}</div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                { label: 'Glass', val: '85%' },
                { label: 'Scratch', val: '99%' },
                { label: 'Clarity', val: '72%' },
                { label: 'Protection', val: '33%' }
              ].map(s => (
                <div key={s.label}>
                  <div className="flex justify-between text-[10px] mb-1 text-gray-500 uppercase"><span>{s.label}</span><span className="text-white font-bold">{s.val}</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-[#FF5C35]" style={{ width: s.val }}></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-32">
          <h2 className="text-3xl font-display font-bold mb-4 tracking-tighter uppercase"><span className="text-[#FF5C35]">Polishing</span> Intensity Levels Using <span className="text-[#FF5C35]">Nano</span></h2>
          <p className="text-gray-500 text-sm mb-16 max-w-2xl mx-auto">From light gloss enhancement to complete multi-stage restoration, we offer varying levels of correction to suit your vehicle's needs.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { l: 'Light Polish' },
              { l: 'Medium Correction' },
              { l: 'Deep Correction' },
              { l: 'Multi-Stage Restoration' }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-[140px] h-[140px] rounded-full border-2 border-white/5 mx-auto mb-6 flex items-center justify-center text-3xl group-hover:border-[#FF5C35] transition-all bg-[#262626] bg-[url('/photo/view-3d-car.jpg')] bg-cover">

                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* 3. Visual Impact Section */}
        <div className="text-center mb-32">
          <h2 className="text-2xl md:text-4xl font-display mb-4 tracking-tighter text-gray-300 ">
            The <span className="text-[#FF5C35] px-1"> Difference</span> is
            <span className="text-[#FF5C35] px-1"> Clear</span>
          </h2>

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
              <img src="/photo/after.png" alt="Exterior" className="w-full h-full object-cover" />
              <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#111]/80 backdrop-blur-md rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">After</div>
            </div>

            {/* Foreground Image (Before - Left Side) */}
            <div
              className="absolute inset-0 border-r-2 border-white shadow-[10px_0_15px_-3px_rgba(0,0,0,0.5)]"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img src="/photo/landing services.jpeg" alt="Interior" className="w-full h-full object-cover" />
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

        <div className="container w-full flex flex-col lg:flex-row items-center justify-between gap-10 mb-10">
          <div className="card rounded-2xl border-2 border-[#FF5C35] w-full">
            <img src="/photo/view-3d-car.jpg" className='rounded-2xl w-full object-cover max-h-[250px]' alt="" />
            <div className="card-content p-6 ">
              <h2 className='my-3 text-2xl text-white'>Standard Polish</h2>
              <p>A single stage machine polish designed to increase gloss and remove
                very light hazing. Ideal for newer vehicles that need a quick refresh
                before a show or sale.</p>
            </div>
          </div>
          <div className="card border-2 border-[#FF5C35] rounded-2xl w-full">
            <img src="/photo/view-3d-car.jpg" className='rounded-2xl w-full object-cover max-h-[250px]' alt="" />
            <div className="card-content p-6 ">
              <h2 className='my-3 text-2xl text-white'>Premium Paint Correction</h2>
              <p>Our signature multi-stage process. We measure paint depth,
                compound to remove defects, and refine to a jeweler's finish. This
                restores 95%+ of paint clarity.</p>
            </div>
          </div>
        </div>

          <div className=" w-full flex items-center justify-center m-10 ">
            <h2 className='my-3 text-4xl text-white '><span className='text-[#FF5C35]'>Select</span> Your <span className='text-[#FF5C35]'>Package</span></h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-[#262626] border border-white/5 rounded-2xl p-6 flex flex-col">
              <div className="h-40 bg-[#1a1a1a] rounded-xl mb-6 overflow-hidden flex items-center justify-center opacity-40">
                <div className="text-2xl">📸</div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-gray-200">Enhancement</h4>
                <span className="text-[#FF5C35] font-display font-bold">$850+</span>
              </div>
              <ul className="text-[10px] text-gray-500 space-y-2 mb-8 flex-grow">
                {['Deep Wheel Cleaning', 'Iron Fallout Removal', '2-Stage Correction', '1-Year Ceramic Lite', 'Est. Time: 2 Days'].map(f => (
                  <li key={f} className="flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>{f}</li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#FF5C35] text-white text-xs font-bold rounded-lg hover:brightness-110 transition-all uppercase tracking-widest">Book Service</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service3View;
