import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PackagesCarousel from '../../components/PackagesCarousel';

const availablePhotos = [
  '/assets/photo/22536460-00db-44a2-a51c-6657fb1feec0.jpg',
  '/assets/photo/357d613a-59c8-4fed-a7d5-f0f11f5ea01e.jpg',
  '/assets/photo/4bc12624-9958-4238-bb78-cec5753fbd47.jpg',
  '/assets/photo/6c7ba9c5-ee8b-4082-8133-7cee8cf621b2.jpg',
  '/assets/photo/9394f893-7173-4229-9c39-d77c961e4e09.jpg',
  '/assets/photo/car.jpg',
  '/assets/photo/dash came.jpeg',
  '/assets/photo/dash came.jpg',
  '/assets/photo/dash came1.jpeg',
  '/assets/photo/dash came (5).jpeg',
  '/assets/photo/dash-came.jpeg',
  '/assets/photo/landing services.jpg',
  '/assets/photo/WhatsApp Image 2026-02-08 at 3.58.07 PM.jpeg',
  '/assets/photo/WhatsApp Image 2026-02-14 at 9.22.07 PM.jpeg',
  '/assets/photo/after heat protection.jpeg',
  '/assets/photo/levels heat protection.jpeg',
  '/assets/photo/nano-services.jpg',
  '/assets/photo/window-tint.jpg'
];

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FF5C35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const getRandomPhoto = (index) => {
  return availablePhotos[index % availablePhotos.length];
};

const DashCam = () => {
  const { t } = useTranslation(['dashcam', 'service5', 'common']);

  const dashLevels = t('dashcam:dash_levels', { returnObjects: true }) || [];
  const stats = t('dashcam:stats', { returnObjects: true }) || [];
  const popularCams = t('dashcam:popular_cams', { returnObjects: true }) || [];
  const packagesList = t('service5:packages', { returnObjects: true }) || [];

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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display text-white tracking-widest uppercase">
            <span className="text-[#FF4500]">{t('dashcam:hero_highlight')}</span> <span className="font-light">{t('dashcam:hero_name')}</span> {t('dashcam:hero_rest')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 items-stretch">
          <div className="rounded-xl overflow-hidden shadow-2xl h-full border border-white/5">
            <img src={mainImage} alt="Dash Cam" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#1a1a1a] border border-[#FF4500]/50 p-8 rounded-xl shadow-lg flex flex-col justify-center relative">
            <h2 className="text-4xl font-display font-light tracking-widest uppercase text-white mb-4">{t('dashcam:card_title')}</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light">{t('dashcam:card_subtitle')}</p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs text-white font-bold tracking-widest uppercase">{t('dashcam:select_dash_level')}</span>
              <span className="text-[9px] bg-[#FF4500] text-black font-bold px-3 py-1 rounded-full uppercase tracking-widest">{t('dashcam:premium_warranty')}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {Array.isArray(dashLevels) && dashLevels.map((level, i) => (
                <div key={i} className={`py-2 text-[10px] rounded border border-white/20 text-center uppercase tracking-wider text-gray-400 ${i === 2 || i === 5 ? 'bg-[#333] text-white border-white/40 font-bold' : ''}`}>{level}</div>
              ))}
            </div>
            <div className="flex justify-between items-center text-xs text-white tracking-widest font-bold uppercase border-b border-white/10 pb-2 mb-6">
              <span>{t('dashcam:cooling_factor')}</span>
              <span className="text-[10px] text-gray-500 font-normal">{t('dashcam:heat_rejection')}</span>
            </div>
            <div className="space-y-4">
              {Array.isArray(stats) && stats.map((s, i) => (
                <div key={i} className="flex grid grid-cols-[100px_1fr_40px] gap-4 items-center">
                  <div className="text-[9px] text-gray-400 tracking-wider uppercase whitespace-nowrap">{s.l}</div>
                  <div className="h-1.5 w-full bg-[#333] rounded-full overflow-hidden"><div className="h-full bg-[#FF4500]" style={{ width: s.v }}></div></div>
                  <div className="text-[9px] text-white text-right">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-24">
          <h2 className="text-3xl font-display uppercase tracking-widest text-white mb-4">
            <span className="text-[#FF4500]">{t('dashcam:popular_title_1')}</span> {t('dashcam:popular_title_2')} <span className="text-[#FF4500]">{t('dashcam:popular_title_3')}</span> {t('dashcam:popular_title_4')}
          </h2>
          <p className="text-gray-400 text-sm mb-12 max-w-2xl mx-auto italic font-light tracking-wide">{t('dashcam:popular_subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {Array.isArray(popularCams) && popularCams.map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-transparent hover:border-gray-500 transition-all duration-300 shadow-2xl">
                  <img src={[pop1, pop2, pop3, pop4][i]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt={item.l} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{item.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mb-32 border-y border-white/5 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display uppercase tracking-widest text-white mb-2">
              <span className="text-[#FF4500]">{t('dashcam:difference_1')}</span> {t('dashcam:difference_2')} <span className="text-[#FF4500]">{t('dashcam:difference_3')}</span> {t('dashcam:difference_4')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-5xl mx-auto">
            <div className="relative group aspect-video">
              <img src={beforeImg} alt="Before" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-[#FF4500] text-[#FF4500] px-6 py-1 text-[10px] font-bold tracking-[0.2em] bg-black/50 backdrop-blur-sm shadow-xl">{t('dashcam:slider_before')}</div>
            </div>
            <div className="relative group aspect-video">
              <img src={afterImg} alt="After" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-[#FF4500] text-[#FF4500] px-6 py-1 text-[10px] font-bold tracking-[0.2em] bg-black/50 backdrop-blur-sm shadow-xl">{t('dashcam:slider_after')}</div>
            </div>
          </div>
        </div>
      </div>

      <PackagesCarousel
        packages={packagesList}
        title={
          <>
            {t('dashcam:packages_title_1')}{' '}
            <span className="text-[#FF5C35]">{t('dashcam:packages_title_2')}</span>{' '}
            {t('dashcam:packages_title_rest')}
          </>
        }
        bookLabel={t('service5:pkg_book')}
      />
    </div>
  );
};

export default DashCam;
