import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';
import PackagesCarousel from '../../components/PackagesCarousel';

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const MetricCard = ({ icon, badge, title, subtitle, desc }) => (
  <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#FF5C35]/30 transition-all">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-xl bg-[#FF5C35]/10 border border-[#FF5C35]/20 flex items-center justify-center shrink-0">
        <span className="text-lg"><Icon name={icon} /></span>
      </div>
      <div>
        <p className="text-white font-bold text-sm leading-tight">{title}</p>
        <p className="text-gray-500 text-[10px] uppercase tracking-widest">{subtitle}</p>
      </div>
    </div>
    <div className="w-full py-1.5 text-center rounded bg-[#FF5C35] text-white text-[10px] font-bold tracking-widest uppercase">
      {badge}
    </div>
    <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
  </div>
);

const TierCard = ({ icon, name, years, desc }) => (
  <div className="flex flex-col items-center text-center gap-3 group">
    <div className="w-20 h-20 rounded-full border-2 border-[#FF5C35]/30 bg-[#1a1a1a] flex items-center justify-center group-hover:border-[#FF5C35] transition-all shadow-lg group-hover:shadow-[#FF5C35]/20">
      <span className="text-3xl">
        <Icon name={icon} />
      </span>
    </div>
    <div>
      <p className="text-white font-bold text-sm">{years}</p>
      <p className="text-[#FF5C35] text-xs font-semibold">{name}</p>
    </div>
    <p className="text-gray-500 text-[11px] leading-relaxed max-w-[140px]">{desc}</p>
  </div>
);

const NanoCeramic = () => {
  const { t } = useTranslation(['service5', 'common']);
  const [sliderPos, setSliderPos] = useState(50);

  const packagesList = t('service5:packages', { returnObjects: true }) || [];
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSliderPos(((e.clientX - rect.left) / rect.width) * 100);
  };
  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSliderPos(((e.touches[0].clientX - rect.left) / rect.width) * 100);
  };

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">
      <section className="relative bg-[#0d0d0d]">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF5C35' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 text-center pt-14 pb-8 px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            <span className="text-[#FF5C35]">{t('service5:hero_highlight')}</span>{' '}
            <span className="text-white">{t('service5:hero_rest')}</span>
          </h1>
          <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto tracking-wide">
            {t('service5:hero_subtitle')}
          </p>
        </div>
        <div className="relative w-full h-[280px] md:h-[420px] overflow-hidden">
          <img
            src="/assets/photo/nano-services.jpg"
            alt="Nano ceramic molecular shield"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 via-transparent to-[#111]/80" />
        </div>
      </section>

      <section className="py-16 px-6 bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t('service5:metrics_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <MetricCard
              icon="layers"
              badge={t('service5:metrics.9h.badge')}
              title={t('service5:metrics.9h.title')}
              subtitle={t('service5:metrics.9h.subtitle')}
              desc={t('service5:metrics.9h.desc')}
            />
            <MetricCard
              icon="water_drop"
              badge={t('service5:metrics.hydro.badge')}
              title={t('service5:metrics.hydro.title')}
              subtitle={t('service5:metrics.hydro.subtitle')}
              desc={t('service5:metrics.hydro.desc')}
            />
            <MetricCard
              icon="light_mode"
              badge={t('service5:metrics.uv.badge')}
              title={t('service5:metrics.uv.title')}
              subtitle={t('service5:metrics.uv.subtitle')}
              desc={t('service5:metrics.uv.desc')}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            <span className="text-[#FF5C35]">{t('service5:tiers_title_highlight')}</span>{t('service5:tiers_title_rest')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TierCard
              icon="shield"
              years={t('service5:tiers.lite.years')}
              name={t('service5:tiers.lite.name')}
              desc={t('service5:tiers.lite.desc')}
            />
            <TierCard
              icon="diamond"
              years={t('service5:tiers.pro.years')}
              name={t('service5:tiers.pro.name')}
              desc={t('service5:tiers.pro.desc')}
            />
            <TierCard
              icon="bolt"
              years={t('service5:tiers.ultra.years')}
              name={t('service5:tiers.ultra.name')}
              desc={t('service5:tiers.ultra.desc')}
            />
            <TierCard
              icon="all_inclusive"
              years={t('service5:tiers.elite.years')}
              name={t('service5:tiers.elite.name')}
              desc={t('service5:tiers.elite.desc')}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-[#FF5C35]">{t('service5:slider.before')}</span> {t('service5:slider.vs')}{' '}
            <span className="text-[#FF5C35]">{t('service5:slider.after')}</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10">{t('service5:slider.subtitle')}</p>
          <div
            className="relative w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            <div className="absolute inset-0">
              <img
                src="/assets/photo/after.png"
                alt="After nano ceramic"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400'; }}
              />
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">
                {t('service5:slider.btn_after')}
              </div>
            </div>
            <div
              className="absolute inset-0"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img
                src="/assets/photo/landing services.jpeg"
                alt="Before nano ceramic"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1400'; }}
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">
                {t('service5:slider.btn_before')}
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-0.5 bg-white/60 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="bg-[#FF5C35] text-white text-[9px] font-bold px-3 py-1.5 rounded-full shadow-xl border border-white/20 whitespace-nowrap tracking-widest uppercase">
                {t('service5:slider.slide_to_compare')}
              </div>
            </div>
            <input
              type="range" min="0" max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>
        </div>
      </section>

      <PackagesCarousel
        packages={packagesList}
        title={
          <>
            <span className="text-[#FF5C35]">{t('service5:packages_title_1')}</span> &amp;{' '}
            <span className="text-[#FF5C35]">{t('service5:packages_title_2')}</span>
            {t('service5:packages_title_rest')}
          </>
        }
        subtitle={t('service5:packages_subtitle')}
        bookLabel={t('service5:pkg_book')}
      />
    </div>
  );
};

export default NanoCeramic;
