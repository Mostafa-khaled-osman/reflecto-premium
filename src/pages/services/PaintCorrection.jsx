import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';
import PackagesCarousel from '../../components/PackagesCarousel';

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ServiceCard = ({ icon, title, subtitle }) => (
  <div className="flex-1 bg-[#1e1e1e] border border-white/10 rounded-xl p-5 flex flex-col items-start gap-3 hover:border-[#FF5C35]/40 transition-all group">
    <div className="w-12 h-12 rounded-lg bg-[#FF5C35]/10 border border-[#FF5C35]/20 flex items-center justify-center text-2xl group-hover:bg-[#FF5C35]/20 transition-all">
      <Icon name={icon} />
    </div>
    <div>
      <p className="text-white font-bold text-sm">{title}</p>
      <p className="text-gray-500 text-xs mt-0.5">{subtitle}</p>
    </div>
  </div>
);

const StatBar = ({ label, value, numericValue }) => (
  <div className="flex items-center gap-4">
    <span className="text-gray-400 text-xs w-40 shrink-0">{label}</span>
    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
      <div className="h-full bg-gradient-to-r from-[#FF5C35] to-[#ff7a5c] rounded-full" style={{ width: `${numericValue}%`, transition: 'width 1s ease' }} />
    </div>
    <span className="text-[#FF5C35] font-bold text-xs w-12 text-right">{value}</span>
  </div>
);

const intensityImages = [
  '/assets/photo/level heat protection1.jpeg',
  '/assets/photo/levels heat protection.jpeg',
  '/assets/photo/levels heat protection3.jpeg',
  '/assets/photo/landing services.jpeg',
];

const PaintCorrection = () => {
  const { t } = useTranslation(['paint_correction', 'common']);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const serviceCards = t('paint_correction:service_cards', { returnObjects: true }) || [];
  const statBars = t('paint_correction:stat_bars', { returnObjects: true }) || [];
  const intensityLevels = t('paint_correction:intensity_levels', { returnObjects: true }) || [];
  const packages = t('service5:packages', { returnObjects: true }) || [];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans">
      <section className="relative w-full">
        <div className="text-center pt-14 pb-8 px-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-[#FF5C35]">{t('paint_correction:hero_highlight')}</span>
            <span className="text-white">{t('paint_correction:hero_rest')}</span>
          </h1>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">{t('paint_correction:hero_subtitle')}</p>
        </div>
        <div className="w-full h-[320px] md:h-[460px] overflow-hidden">
          <img src="/assets/photo/landing servicesss.jpeg" alt="Paint Correction & Polishing" className="w-full h-full object-cover object-center" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1400'; }} />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t('paint_correction:premium_services_prefix')} <span className="text-[#FF5C35]">{t('paint_correction:premium_services_highlight')}</span>{t('paint_correction:premium_services_suffix')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            {Array.isArray(serviceCards) && serviceCards.map((card, i) => (<ServiceCard key={i} icon={card.icon} title={card.title} subtitle={card.subtitle} />))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="text-[#FF5C35]">{t('paint_correction:technical_highlight')}</span>{t('paint_correction:technical_rest')}
          </h2>
          <div className="space-y-5">
            {Array.isArray(statBars) && statBars.map((bar, i) => (<StatBar key={i} label={bar.label} value={bar.value} numericValue={bar.numericValue} />))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#141414]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            <span className="text-[#FF5C35]">{t('paint_correction:intensity_title_1_highlight')}</span>{t('paint_correction:intensity_title_1_rest')}
            <span className="text-white">{t('paint_correction:intensity_title_2')}</span>{t('paint_correction:intensity_title_3')}
            <span className="text-[#FF5C35]">{t('paint_correction:intensity_title_4_highlight')}</span>{t('paint_correction:intensity_title_4_rest')}
          </h2>
          <p className="text-gray-500 text-sm mb-12 max-w-2xl mx-auto">{t('paint_correction:intensity_subtitle')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.isArray(intensityLevels) && intensityLevels.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#FF5C35] transition-all shadow-lg">
                  <img src={intensityImages[i]} alt={item.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" onError={(e) => { e.target.parentElement.style.background = '#262626'; e.target.style.display = 'none'; }} />
                </div>
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            {t('paint_correction:slider_title_prefix')}<span className="text-[#FF5C35]">{t('paint_correction:slider_title_highlight_1')}</span>{t('paint_correction:slider_title_rest')}
            <span className="text-[#FF5C35]">{t('paint_correction:slider_title_highlight_2')}</span>
          </h2>
          <div ref={sliderRef} className="relative w-full h-[300px] md:h-[440px] rounded-xl overflow-hidden border border-white/5 shadow-2xl select-none cursor-ew-resize" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
            <div className="absolute inset-0">
              <img src="/assets/photo/after.png" alt="After polishing" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400'; }} />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">{t('paint_correction:slider_after')}</div>
            </div>
            <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}>
              <img src="/assets/photo/landing services.jpeg" alt="Before polishing" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1400'; }} />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">{t('paint_correction:slider_before')}</div>
              <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]" />
            </div>
            <div className="absolute top-0 bottom-0 flex items-center justify-center z-10 pointer-events-none" style={{ left: `${sliderPosition}%` }}>
              <div className="w-10 h-10 bg-[#FF5C35] rounded-full flex items-center justify-center shadow-xl border-2 border-white -translate-x-1/2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-2"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>
            <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" />
          </div>
        </div>
      </section>

      <PackagesCarousel
        packages={packages}
        title={
          <>
            <span className="text-[#FF5C35]">{t('paint_correction:packages_title_highlight')}</span>
            {t('paint_correction:packages_title_rest')}
          </>
        }
        bookLabel={t('service5:pkg_book')}
      />
    </div>
  );
};

export default PaintCorrection;
