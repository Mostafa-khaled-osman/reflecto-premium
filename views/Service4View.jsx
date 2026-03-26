import React from 'react';

const availablePhotos = [
  '/photo/22536460-00db-44a2-a51c-6657fb1feec0.jpg',
  '/photo/357d613a-59c8-4fed-a7d5-f0f11f5ea01e.jpg',
  '/photo/4bc12624-9958-4238-bb78-cec5753fbd47.jpg',
  '/photo/6c7ba9c5-ee8b-4082-8133-7cee8cf621b2.jpg',
  '/photo/9394f893-7173-4229-9c39-d77c961e4e09.jpg',
  '/photo/car.jpg',
  '/photo/dash came.jpeg',
  '/photo/dash came.jpg',
  '/photo/dash came1.jpeg',
  '/photo/dash came (5).jpeg',
  '/photo/dash-came.jpeg',
  '/photo/landing services.jpg',
  '/photo/WhatsApp Image 2026-02-08 at 3.58.07 PM.jpeg',
  '/photo/WhatsApp Image 2026-02-14 at 9.22.07 PM.jpeg',
  '/photo/after heat protection.jpeg',
  '/photo/levels heat protection.jpeg',
  '/photo/nano-services.jpg',
  '/photo/window-tint.jpg'
];

// Instead of Math.random which causes layout shift on re-render, we map a steady index
const getRandomPhoto = (index) => {
  return availablePhotos[index % availablePhotos.length];
};

const Service4View = () => {
  const mainImage = getRandomPhoto(6);
  const pop1 = getRandomPhoto(8);
  const pop2 = getRandomPhoto(9);
  const pop3 = getRandomPhoto(10);
  const pop4 = getRandomPhoto(7);
  const beforeImg = getRandomPhoto(5);
  const afterImg = getRandomPhoto(4);

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
            <img src={mainImage} alt="Dash Cam" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#1a1a1a] border border-[#FF4500]/50 p-8 rounded-xl shadow-lg flex flex-col justify-center relative">
            <h2 className="text-4xl font-display font-light tracking-widest uppercase text-white mb-4">Car Dash Cam</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">
              Advanced front dashcam technology that ensures high quality 4K video, features collision, and enhanced parking monitor options. a leading industry.
            </p>

            <div className="flex justify-between items-center mb-6">
              <span className="text-xs text-white font-bold tracking-widest uppercase">Select Dash Level</span>
              <span className="text-[9px] bg-[#FF4500] text-black font-bold px-3 py-1 rounded-full uppercase tracking-widest">Premium Panther Warranty</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {['Basic', 'Dash', 'Cam', 'Pro', 'Wi-Fi', 'Professional', 'Loop', 'Parking'].map(t => (
                <div key={t} className={`py-2 text-[10px] rounded border border-white/20 text-center uppercase tracking-wider text-gray-400 ${t === 'Cam' || t === 'Professional' ? 'bg-[#333] text-white border-white/40 font-bold' : ''}`}>
                  {t}
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-xs text-white tracking-widest font-bold uppercase border-b border-white/10 pb-2 mb-6">
              <span>Cooling Factor</span>
              <span className="text-[10px] text-gray-500 font-normal">HEAT REJECTION</span>
            </div>

            <div className="space-y-4">
              {[
                { l: 'Resolution', v: '92%' },
                { l: 'Lens & Field', v: '96%' },
                { l: 'Features', v: '80%' },
                { l: 'Storage', v: '85%' },
                { l: 'Night', v: '90%' },
                { l: 'Ease of Use', v: '85%' },
                { l: 'Advanced', v: '95%' },
                { l: 'Value', v: '90%' },
                { l: 'Connectivity', v: '80%' }
              ].map(s => (
                <div key={s.l} className="flex grid grid-cols-[100px_1fr_40px] gap-4 items-center">
                  <div className="text-[9px] text-gray-400 tracking-wider uppercase whitespace-nowrap">{s.l}</div>
                  <div className="h-1.5 w-full bg-[#333] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF4500]" style={{ width: s.v }}></div>
                  </div>
                  <div className="text-[9px] text-white text-right">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Popular Section */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-display uppercase tracking-widest text-white mb-4">
            <span className="text-[#FF4500]">The Most</span> Popular <span className="text-[#FF4500]">Dash</span> cam
          </h2>
          <p className="text-gray-400 text-sm mb-12 max-w-2xl mx-auto italic font-light tracking-wide">
            from a light gloss enhancement to complete multi-stage restoration, we offer varying levels of correction to suit your vehicle's needs.
          </p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {[
              { l: 'REDTIGER 4K', img: pop1 },
              { l: 'GALPHI 4K', img: pop2 },
              { l: '70MAI', img: pop3 },
              { l: 'BASEUS VD1 PRO', img: pop4 }
            ].map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent hover:border-gray-500 transition-all duration-300 shadow-2xl">
                  <img src={item.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt={item.l} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{item.l}</div>
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
            <div className="relative group aspect-video">
              <img src={beforeImg} alt="Before" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-[#FF4500] text-[#FF4500] px-6 py-1 text-[10px] font-bold tracking-[0.2em] bg-black/50 backdrop-blur-sm shadow-xl">
                BEFORE
              </div>
            </div>
            <div className="relative group aspect-video">
              <img src={afterImg} alt="After" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-[#FF4500] text-[#FF4500] px-6 py-1 text-[10px] font-bold tracking-[0.2em] bg-black/50 backdrop-blur-sm shadow-xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-[#1a1a1a]  flex flex-col border border-white/5 rounded-2xl">
                <div className="bg-white patterned-bg h-40 mb-4 rounded flex items-center justify-center  relative overflow-hidden">
                  {/* Using absolute positioned images to give the "transparent/cutout" grid look from the screenshot */}
                  <div className="absolute inset-0 bg-gray-200" style={{ backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
                  <img src={getRandomPhoto(i + 10)} alt="Dashcam rendering" className="w-full h-full object-contain relative z-10 filter drop-shadow-2xl" />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-6">
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
                  <button className="w-full py-3 bg-[#FF4500]/90 hover:bg-[#FF4500] text-white text-[10px] font-bold rounded uppercase tracking-[0.2em] transition-colors">
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

export default Service4View;
