import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation resources directly
import commonEn from './views/locales/en/common.json';
import homeEn from './views/locales/en/home.json';
import servicesEn from './views/locales/en/services.json';
import service5En from './views/locales/en/service5.json';
import pricingEn from './views/locales/en/pricing.json';
import ppfEn from './views/locales/en/ppf.json';
import tintEn from './views/locales/en/tint.json';
import paintCorrectionEn from './views/locales/en/paint_correction.json';
import dashcamEn from './views/locales/en/dashcam.json';
import contactEn from './views/locales/en/contact.json';
import adminClientsEn from './views/locales/en/admin_clients.json';

import commonAr from './views/locales/ar/common.json';
import homeAr from './views/locales/ar/home.json';
import servicesAr from './views/locales/ar/services.json';
import service5Ar from './views/locales/ar/service5.json';
import pricingAr from './views/locales/ar/pricing.json';
import ppfAr from './views/locales/ar/ppf.json';
import tintAr from './views/locales/ar/tint.json';
import paintCorrectionAr from './views/locales/ar/paint_correction.json';
import dashcamAr from './views/locales/ar/dashcam.json';
import contactAr from './views/locales/ar/contact.json';
import adminClientsAr from './views/locales/ar/admin_clients.json';

const resources = {
  en: {
    common: commonEn,
    home: homeEn,
    services: servicesEn,
    service5: service5En,
    pricing: pricingEn,
    ppf: ppfEn,
    tint: tintEn,
    paint_correction: paintCorrectionEn,
    dashcam: dashcamEn,
    contact: contactEn,
    admin_clients: adminClientsEn
  },
  ar: {
    common: commonAr,
    home: homeAr,
    services: servicesAr,
    service5: service5Ar,
    pricing: pricingAr,
    ppf: ppfAr,
    tint: tintAr,
    paint_correction: paintCorrectionAr,
    dashcam: dashcamAr,
    contact: contactAr,
    admin_clients: adminClientsAr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    
    // Default namespace to load
    defaultNS: 'common',
    
    // Allowed namespaces
    ns: ['common', 'home', 'services', 'service5', 'pricing', 'ppf', 'tint', 'paint_correction', 'dashcam', 'contact', 'admin_clients'],

    interpolation: {
      escapeValue: false, 
    },
    
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'navigator'],
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
