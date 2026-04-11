import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PackagesCarousel from '../../components/PackagesCarousel';

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Annotation = ({ label, className }) => (
  <div className={`absolute flex items-center gap-1.5 ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C35] shrink-0" />
    <span className="text-[10px] font-semibold text-gray-200 whitespace-nowrap leading-none">{label}</span>
  </div>
);

const Ppf = () => {
  const { t } = useTranslation(['ppf', 'common']);
  const [sliderPos, setSliderPos] = useState(50);

  const anatomyLayers = t('ppf:anatomy_layers', { returnObjects: true }) || [];
  const packages = t('service5:packages', { returnObjects: true }) || [];
  const overlayLabels = t('ppf:anatomy_overlay_labels', { returnObjects: true }) || [];

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
      <section className="relative bg-[#0d0d0d] pt-14 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(255,92,53,0.08), transparent)' }} />
        <div className="text-center px-4 mb-10 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            <span className="text-[#FF5C35]">{t('ppf:hero_highlight')}</span>{' '}
            <span className="text-white">{t('ppf:hero_rest')}</span>
          </h1>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <Annotation label={t('ppf:annotations.top_coat')} className="top-[12%]  left-[8%]" />
          <Annotation label={t('ppf:annotations.impact_core')} className="top-[8%]   left-[42%]" />
          <Annotation label={t('ppf:annotations.nano_adhesive')} className="top-[10%]  right-[5%]" />
          <Annotation label={t('ppf:annotations.thickness_8')} className="bottom-[18%] left-1/2 -translate-x-1/2" />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="h-16 w-px bg-[#FF5C35]/40" />
            <span className="text-[9px] text-[#FF5C35] rotate-180 [writing-mode:vertical-lr] tracking-widest">{t('ppf:annotations.thickness_8')}</span>
            <div className="h-16 w-px bg-[#FF5C35]/40" />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
            <div className="h-20 w-px bg-[#FF5C35]/40" />
            <span className="text-[9px] text-[#FF5C35] rotate-180 [writing-mode:vertical-lr] tracking-widest">{t('ppf:annotations.thickness_10')}</span>
            <div className="h-20 w-px bg-[#FF5C35]/40" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#FF5C35]/20 shadow-[0_0_60px_rgba(255,92,53,0.12)]">
            <img
              src="/assets/photo/ppf.jpeg"
              alt="PPF Self-Healing Shield car diagram"
              className="w-full h-[260px] md:h-[380px] object-cover mix-blend-luminosity opacity-90"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400';
                e.target.style.mixBlendMode = 'normal';
              }}
            />
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-8 max-w-xl mx-auto px-4 leading-relaxed relative z-10">
          {t('ppf:hero_tagline')}
        </p>
      </section>

      <section className="py-16 px-6 bg-[#161616]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              <span className="text-[#FF5C35]">{t('ppf:anatomy_title_highlight')}</span>{t('ppf:anatomy_title_rest')}
            </h2>
            <p className="text-gray-500 text-xs mb-8 max-w-sm leading-relaxed">
              {t('ppf:anatomy_subtitle')}
            </p>
            <div className="space-y-6 pl-4 border-l border-[#FF5C35]/20">
              {Array.isArray(anatomyLayers) && anatomyLayers.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#FF5C35] shadow-[0_0_8px_2px_rgba(255,92,53,0.5)]" />
                  <h4 className="font-bold text-gray-200 text-sm mb-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] flex items-center justify-center p-4 min-h-[260px]">
            <img
              src="/assets/photo/nano servicesss.jpg"
              alt="PPF film layers stack"
              className="w-full rounded-xl object-cover max-h-[280px]"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800';
              }}
            />
            <div className="absolute top-6 right-6 text-right space-y-4">
              {Array.isArray(overlayLabels) && overlayLabels.map((l, i) => (
                <div key={i} className="text-[8px] font-bold text-gray-300 uppercase tracking-widest border-b border-white/10 pb-1 text-right">{l}</div>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 space-y-4">
              <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest border-b border-white/10 pb-1">
                {t('ppf:anatomy_bottom_label')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            {t('ppf:visual_title_prefix')} <span className="text-[#FF5C35]">{t('ppf:visual_title_highlight')}</span>
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            {t('ppf:visual_subtitle')}
          </p>
          <div className="relative flex items-center rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#0a0a0a]">
            <div className="relative flex-1 h-[240px] md:h-[340px] overflow-hidden">
              <img
                src="/assets/photo/landing services.jpeg"
                alt="Gloss finish"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">
                {t('ppf:gloss_finish')}
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-center shrink-0">
              <div className="w-10 h-10 bg-[#FF5C35] rounded-full flex items-center justify-center shadow-xl border-2 border-white mx-[-1.25rem]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-ml-2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
            <div className="relative flex-1 h-[240px] md:h-[340px] overflow-hidden">
              <img
                src="/assets/photo/after.png"
                alt="Matte finish"
                className="w-full h-full object-cover grayscale"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'; e.target.classList.add('grayscale'); }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-bold tracking-widest text-white uppercase border border-white/10">
                {t('ppf:matte_finish')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PackagesCarousel
        packages={packages}
        title={
          <>
            {t('ppf:packages_title_prefix')}{' '}
            <span className="text-[#FF5C35]">{t('ppf:packages_title_highlight')}</span>
          </>
        }
        bookLabel={t('ppf:book_service')}
      />
    </div>
  );
};

export default Ppf;
