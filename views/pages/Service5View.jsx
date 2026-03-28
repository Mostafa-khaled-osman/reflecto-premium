import React from 'react';

const availablePhotos = [
  '/assets/photo/after heat protection.jpeg',
  '/assets/photo/levels heat protection.jpeg',
  '/assets/photo/nano-services.jpg',
  '/assets/photo/window-tint.jpg',
  '/assets/photo/22536460-00db-44a2-a51c-6657fb1feec0.jpg',
  '/assets/photo/357d613a-59c8-4fed-a7d5-f0f11f5ea01e.jpg',
  '/assets/photo/4bc12624-9958-4238-bb78-cec5753fbd47.jpg',
  '/assets/photo/6c7ba9c5-ee8b-4082-8133-7cee8cf621b2.jpg',
  '/assets/photo/9394f893-7173-4229-9c39-d77c961e4e09.jpg',
  '/assets/photo/car.jpg',
  '/assets/photo/landing services.jpg',
  '/assets/photo/WhatsApp Image 2026-02-08 at 3.58.07 PM.jpeg',
  '/assets/photo/WhatsApp Image 2026-02-14 at 9.22.07 PM.jpeg',
];

const getRandomPhoto = (index) => {
  return availablePhotos[index % availablePhotos.length];
};

const Service5View = () => {
  const mainImage = getRandomPhoto(5);
  const pop1 = getRandomPhoto(2);
  const pop2 = getRandomPhoto(3);
  const pop3 = getRandomPhoto(4);
  const pop4 = getRandomPhoto(1);
  const beforeImg = getRandomPhoto(6);
  const afterImg = getRandomPhoto(0);

  return (
    <div className="min-h-screen bg-[#111111] pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display text-white tracking-widest uppercase">
            <span className="text-[#FF4500]">Welcome to</span> <span className="font-light">Omar in</span> Services
          </h1>
        </div>

        {/* Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-stretch">
          <div className="rounded-xl overflow-hidden shadow-2xl h-full border border-white/5">
            <img src={mainImage} alt="Thermal Insulation" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#1a1a1a] border border-[#FF4500]/50 p-8 rounded-xl shadow-lg flex flex-col justify-center relative">
            <h2 className="text-3xl lg:text-4xl font-display font-light tracking-widest uppercase text-white mb-4 leading-tight">ADVANCED THERMAL<br />INSULATION PROTECT.</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
              Advanced nano-ceramic tint technology that reduces heat, blocks UV rays, improves privacy, and enhances driving comfort without affecting visibility.
            </p>

            <div className="flex justify-between items-center mb-6">
              <span className="text-xs text-white font-bold tracking-widest uppercase">Select Tint Level</span>
              <span className="text-[9px] bg-[#FF4500] text-black font-bold px-3 py-1 rounded-full uppercase tracking-widest">Premium Film Technology</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {['Medium 50%', 'High 30%', 'Premium 10%', 'Ultra 5%'].map(t => (
                <div key={t} className={`py-2 text-[10px] rounded border border-white/20 text-center uppercase tracking-wider text-gray-400 ${t === 'Premium 10%' ? 'bg-[#333] text-white border-white/40 font-bold' : ''}`}>
                  {t}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-xs text-white tracking-widest font-bold uppercase border-b border-white/10 pb-2 mb-6">
              <span>Cooling Factor</span>
              <span className="text-[10px] text-[#4fabb8] font-bold tracking-[0.2em]">OUR PERFORMANCE</span>
            </div>

            <div className="space-y-4">
              {[
                { l: 'Heat Rejection', v: '98%', width: '98%' },
                { l: 'UV Protection', v: '99%', width: '99%' },
                { l: 'Cabin Cooling', v: '75%', width: '75%' },
                { l: 'Durability', v: '10 Years', width: '85%' },
              ].map(s => (
                <div key={s.l} className="flex grid grid-cols-[110px_1fr_50px] gap-4 items-center">
                  <div className="text-[10px] text-gray-400 tracking-wider uppercase whitespace-nowrap">{s.l}</div>
                  <div className="h-1.5 w-full bg-[#333] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF4500]" style={{ width: s.width }}></div>
                  </div>
                  <div className="text-[10px] text-white text-right">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Popular Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-display uppercase tracking-widest text-white mb-4">
            <span className="text-[#FF4500]">Heat</span> Protection <span className="text-[#FF4500]">L</span>evels
          </h2>
          <p className="text-gray-400 text-sm mb-12 max-w-2xl mx-auto italic font-light tracking-wide">
            From a light gloss enhancement to complete multi-stage restoration, we offer varying levels of correction to suit your vehicle's needs.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { l: 'MEDIUM', img: pop1 },
              { l: 'HIGH', img: pop2 },
              { l: 'PREMIUM', img: pop3 },
              { l: 'ULTRA', img: pop4 }
            ].map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent hover:border-gray-500 transition-all duration-300 shadow-2xl">
                  <img src={item.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110" alt={item.l} />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">{item.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After Section */}
        <div className="relative mb-32 border-y border-white/5 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display uppercase tracking-widest text-white mb-2">
              <span className="text-[#FF4500]">The</span> Difference <span className="text-[#FF4500]">is</span> Clear
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-5xl mx-auto">
            <div className="relative group aspect-[4/3]">
              <img src={beforeImg} alt="Before" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 border-2 border-[#FF4500] text-[#FF4500] px-4 py-1 text-[9px] font-bold tracking-[0.2em] bg-black/80 backdrop-blur-sm shadow-xl rounded">
                BEFORE
              </div>
            </div>
            <div className="relative group aspect-[4/3]">
              <img src={afterImg} alt="After" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 right-6 border-2 border-[#FF4500] text-[#FF4500] px-4 py-1 text-[9px] font-bold tracking-[0.2em] bg-black/80 backdrop-blur-sm shadow-xl rounded">
                AFTER
              </div>
            </div>
          </div>
        </div>

        {/* Select Your Package Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-display text-center uppercase tracking-widest text-white mb-12">
            <span className="text-[#FF4500]">Select</span> Your <span className="text-[#FF4500]">Package</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-2xl flex flex-col border border-white/10 hover:border-[#FF4500]/50 transition-colors overflow-hidden">
                <div className="h-40 relative">
                  <img src={getRandomPhoto(i + 7)} alt="Package Level" className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-5">
                    <h4 className="text-white font-bold tracking-widest uppercase text-[11px]">Enhancement</h4>
                    <span className="text-white font-bold text-[11px]">$850+</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {['Deep Wheel Cleaning', 'Iron Fallout Removal', '2-Stage Correction', '1-Year Ceramic Life', 'Est. Time: 3 Days'].map((item, idx) => (
                      <li key={idx} className="flex items-center text-[10px] text-gray-400 font-light">
                        <svg className="w-3 h-3 text-[#FF4500] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-[#FF4500]/90 hover:bg-[#FF4500] text-white text-[10px] font-bold rounded uppercase tracking-[0.2em] transition-colors shadow-lg">
                    Book Service
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

export default Service5View;
