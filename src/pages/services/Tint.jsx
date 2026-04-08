import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PackagesCarousel from '../../components/PackagesCarousel';

const Tint = () => {
  const { t } = useTranslation(['tint', 'service5', 'common']);
  const [sliderPosition, setSliderPosition] = useState(50);

  const vltLevels = t('tint:vlt_levels', { returnObjects: true }) || [];
  const thermalFeatures = t('tint:thermal_features', { returnObjects: true }) || [];
  const regularFeatures = t('tint:regular_features', { returnObjects: true }) || [];
  const packages = t('service5:packages', { returnObjects: true }) || [];

  return (
    <div className="min-h-screen bg-[#1a1a1a] pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center py-12 mb-8">
          <h1 className="text-3xl md:text-5xl font-display font-light text-white tracking-tight">
            {t('tint:hero_welcome_prefix')} <span className="font-bold">{t('tint:hero_welcome_name')}</span> <span className="text-[#FF5C35] font-bold italic">{t('tint:hero_welcome_highlight')}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <img src="/assets/photo/window-tint.jpg" alt="G-Wagon" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="bg-[#262626] p-10 rounded-3xl border border-white/5">
            <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter uppercase leading-tight">{t('tint:tint_title')}</h2>
            <p className="text-gray-400 text-sm mb-10 leading-relaxed">{t('tint:tint_subtitle')}</p>
            <div className="space-y-8">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-xs font-bold uppercase text-gray-400">{t('tint:select_tint_level')}</span>
                <span className="text-[10px] bg-[#FF5C35]/20 text-[#FF5C35] px-2 py-0.5 rounded-full font-bold uppercase">{t('tint:premium_film')}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-bold text-gray-500">
                {['light_70', 'light_65', 'medium_50', 'dark_30'].map(key => (
                  <div key={key} className={`py-2 rounded-lg border border-white/5 transition-all cursor-pointer ${key === 'medium_50' ? 'bg-[#FF5C35] text-white border-[#FF5C35]' : 'hover:bg-white/5'}`}>{t(`tint:tint_levels.${key}`)}</div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  { label: t('tint:stats.heat_reduction'), val: '85%' },
                  { label: t('tint:stats.uv_protection'), val: '99%' },
                  { label: t('tint:stats.privacy_level'), val: '72%' },
                  { label: t('tint:stats.protection'), val: '33%' }
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
          <span className="text-[#FF5C35] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">{t('tint:visual_guide')}</span>
          <h2 className="text-5xl font-display font-100 mb-14 tracking-tighter w-full h-[37px]"><span className="text-[#FF5C35]">{t('tint:transparency_scale_highlight')}</span>{t('tint:transparency_scale_rest')}</h2>
          <p className="text-gray-400 text-sm mb-10 leading-relaxed w-[38%] mx-auto">{t('tint:transparency_desc')}</p>
          <div className="flex flex-wrap justify-center gap-12">
            {Array.isArray(vltLevels) && vltLevels.map((item, i) => (
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

        <div className="text-center mb-32">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 tracking-tighter text-gray-300">
            {t('tint:visual_impact_prefix')} <span className="text-[#FF5C35]">{t('tint:visual_impact_highlight')}</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            {t('tint:visual_impact_subtitle')}
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
            <div className="absolute inset-0">
              <img src="/assets/photo/after.png" alt="Exterior" className="w-full h-full object-cover" />
              <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#111]/80 backdrop-blur-md rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">{t('tint:slider_after')}</div>
            </div>
            <div
              className="absolute inset-0 border-r-2 border-white shadow-[10px_0_15px_-3px_rgba(0,0,0,0.5)]"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img src="/assets/photo/landing services.jpeg" alt="Interior" className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#111]/80 backdrop-blur-md rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">{t('tint:slider_before')}</div>
            </div>
            <div
              className="absolute top-0 bottom-0 pointer-events-none flex items-center justify-center z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-[#FF5C35] rounded-full flex items-center justify-center shadow-lg text-white border-2 border-white -ml-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-3"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="bg-gradient-to-b from-[#2a1b18] to-[#1a1a1a] p-10 rounded-3xl border border-[#FF5C35]/30">
            <div className="flex justify-between mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-1">{t('tint:thermal_tint_title')}</h3>
                <p className="text-[10px] text-gray-500 font-medium">{t('tint:thermal_tint_subtitle')}</p>
              </div>
              <span className="bg-[#FF5C35] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase h-fit">{t('tint:recommended')}</span>
            </div>
            <ul className="space-y-4 mb-10 text-xs text-gray-400 font-medium">
              {Array.isArray(thermalFeatures) && thermalFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>{f}</li>
              ))}
            </ul>
            <div className="space-y-4">
              {[
                { l: t('tint:thermal_stats.heat_block'), v: '95%' },
                { l: t('tint:thermal_stats.uv_protection'), v: '99%' },
                { l: t('tint:thermal_stats.privacy'), v: '70%' }
              ].map(s => (
                <div key={s.l}>
                  <div className="flex justify-between text-[10px] mb-1 text-gray-500"><span>{s.l}</span><span className="text-white font-bold">{s.v}</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full"><div className="h-full bg-[#FF5C35]" style={{ width: s.v }}></div></div>
                </div>
              ))}
            </div>
            <Link to="/Contact" className="w-full py-3 mt-10 bg-[#FF5C35] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d64a28] transition-all text-center block">
              {t('tint:book_service')}
            </Link>
          </div>

          <div className="bg-[#262626] p-10 rounded-3xl border border-white/5 opacity-80">
            <div className="flex justify-between mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-1 text-gray-300">{t('tint:regular_tint_title')}</h3>
                <p className="text-[10px] text-gray-600 font-medium uppercase">{t('tint:regular_tint_subtitle')}</p>
              </div>
            </div>
            <ul className="space-y-4 mb-10 text-xs text-gray-500 font-medium">
              {Array.isArray(regularFeatures) && regularFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700"><path d="M20 6 9 17l-5-5" /></svg>{f}</li>
              ))}
            </ul>
            <div className="space-y-4">
              {[
                { l: t('tint:thermal_stats.heat_block'), v: '55%' },
                { l: t('tint:thermal_stats.uv_protection'), v: '70%' },
                { l: t('tint:thermal_stats.privacy'), v: '80%' }
              ].map(s => (
                <div key={s.l}>
                  <div className="flex justify-between text-[10px] mb-1 text-gray-600"><span>{s.l}</span><span className="text-gray-400 font-bold">{s.v}</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full"><div className="h-full bg-gray-500" style={{ width: s.v }}></div></div>
                </div>
              ))}
              <Link to="/Contact" className="w-full py-3 mt-10 bg-[#FF5C35] text-white font-bold uppercase tracking-widest rounded-lg hover:bg-[#d64a28] transition-all text-center block">
                {t('tint:book_service')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PackagesCarousel
        packages={packages}
        title={
          <>
            {t('tint:packages_title_highlight_1')}{' '}
            <span className="text-[#FF5C35]">{t('tint:packages_title_highlight_2')}</span>{' '}
            {t('tint:packages_title_rest')}
          </>
        }
        bookLabel={t('service5:pkg_book')}
      />
    </div>
  );
};

export default Tint;
