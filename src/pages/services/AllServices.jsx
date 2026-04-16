import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SERVICES_DATA = [
  { id: 'ppf', icon: 'analytics', path: '/services/ppf', titleKey: 'services:paint_protection_title', descKey: 'services:paint_protection_description', price: '$450', unit: '/project' },
  { id: 'nano', icon: 'verified_user', path: '/services/nano-ceramic', titleKey: 'services:nano_ceramic_title', descKey: 'services:nano_ceramic_description', price: '$275', unit: '/audit' },
  { id: 'paint-correction', icon: 'diversity_3', path: '/services/paint-correction', titleKey: 'services:paint_correction_title', descKey: 'services:paint_correction_description', price: '$890', unit: '/hire' },
  { id: 'tint', icon: 'database', path: '/services/window-tint', titleKey: 'services:window_tinting_title', descKey: 'services:window_tinting_description', price: '$1,200', unit: '/migration' },
  { id: 'dashcam', icon: 'bolt', path: '/services/dash-cam', titleKey: 'services:dash_cam_title', descKey: 'services:dash_cam_description', price: '$600', unit: '/workflow' },
  { id: 'thermal', icon: 'school', path: '/services/window-tint', titleKey: 'services:thermal_insulation_title', descKey: 'services:thermal_insulation_description', price: '$150', unit: '/seat' }
];

const PACKAGE_ICONS = ['diamond', 'shield', 'verified', 'security', 'military_tech', 'workspace_premium', 'award_star', 'stars'];

const AllServices = () => {
  const { t } = useTranslation(['all_services', 'services', 'service5']);
  
  // Get packages from service5:packages. It only has 4, so we duplicate it to get 8 as per requested design
  const basePackages = t('service5:packages', { returnObjects: true }) || [];
  const extendedPackages = [...basePackages, ...basePackages];

  return (
    <div className="bg-[#0a0c10] font-body text-slate-200 selection:bg-[#f97316]/30">
      <Navbar />

      <main className="pt-20">
        {/* Custom Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          .ink-pool-gradient { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); }
          .accent-gradient { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); }
          .glass-card {
            background: rgba(30, 41, 59, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .glow-hover:hover { box-shadow: 0 0 30px rgba(249, 115, 22, 0.15); }
        `}} />

        {/* Hero Section */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#f97316]/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f97316] mb-8">
              {t('all_services:catalogue_badge')}
            </span>
            <h2 className="text-5xl md:text-7xl font-black font-headline text-white leading-[1.05] mb-8 max-w-4xl tracking-tighter">
              {t('all_services:hero_title_1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic">
                {t('all_services:hero_title_highlight')}
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
              {t('all_services:hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#packages" className="px-10 py-4 accent-gradient text-white rounded-full font-bold font-headline shadow-2xl shadow-[#f97316]/20 hover:scale-105 transition-transform">
                {t('all_services:cta_bundles')}
              </a>
              <a href="#services" className="px-10 py-4 border border-white/10 bg-white/5 text-white rounded-full font-bold font-headline hover:bg-white/10 transition-colors">
                {t('all_services:cta_services')}
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 bg-[#0d0f16]" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black font-headline text-white mb-4">{t('all_services:services_title')}</h3>
                <p className="text-slate-400 font-medium">{t('all_services:services_subtitle')}</p>
              </div>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold border border-white/10 flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse"></span>
                  {t('all_services:active_capabilities')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES_DATA.map((srv) => (
                <Link to={srv.path} key={srv.id} className="glass-card p-10 rounded-[2rem] hover:bg-white/5 transition-all duration-300 group glow-hover">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[#f97316] mb-8 group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-500">
                    <span className="material-symbols-outlined text-3xl">{srv.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white font-headline mb-4">{t(srv.titleKey)}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{t(srv.descKey)}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <span className="text-lg font-black text-white">{srv.price}<span className="text-xs text-slate-500 font-medium">{srv.unit}</span></span>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-32 px-6 bg-[#0a0c10] relative overflow-hidden" id="packages">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none overflow-hidden whitespace-nowrap">
            <div className="text-[200px] font-black tracking-tighter text-white/5 italic -ml-40 mt-20">SELECT PACKAGES</div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-black font-headline text-white mb-6 uppercase tracking-tighter" style={{letterSpacing: "-0.05em"}}>
                {t('all_services:packages_title_1')}<span className="text-[#f97316] italic">{t('all_services:packages_title_highlight')}</span>
              </h3>
              <div className="w-24 h-1 bg-[#f97316] mx-auto mb-8 rounded-full"></div>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t('all_services:packages_subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {extendedPackages.map((pkg, i) => (
                <div key={i} className="bg-[#12141c] rounded-2xl overflow-hidden border border-white/5 hover:border-[#f97316]/30 transition-all group">
                  <div className="aspect-square bg-[#1e222a] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
                    <span className="material-symbols-outlined text-white/10 text-6xl group-hover:scale-110 transition-transform duration-500">
                      {PACKAGE_ICONS[i] || 'diamond'}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h5 className="text-xl font-bold text-white tracking-tight">{pkg.label || pkg.name || "Enhancement"}</h5>
                      <span className="text-lg font-bold text-white">{pkg.price}</span>
                    </div>
                    <ul className="space-y-4 mb-10 flex-grow min-h-[160px]">
                      {pkg.features && Array.isArray(pkg.features) && pkg.features.slice(0, 5).map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                          <span className="material-symbols-outlined text-[#f97316] text-lg mt-0.5">check</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/Contact" className="block text-center w-full py-4 bg-[#cc5233] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-[#b3482d] transition-colors">
                      {t('service5:pkg_book') || "Book Service"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f97316]/5 rounded-full blur-3xl"></div>
            <h4 className="text-4xl font-black font-headline text-black mb-6">{t('all_services:final_cta_title')}</h4>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">{t('all_services:final_cta_subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/Contact" className="px-10 py-4 bg-black text-white rounded-full font-bold font-headline hover:bg-slate-800 transition-colors">
                {t('all_services:btn_schedule')}
              </Link>
              <button className="px-10 py-4 border border-black/10 text-black rounded-full font-bold font-headline hover:bg-black/5 transition-colors">
                {t('all_services:btn_download')}
              </button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default AllServices;
