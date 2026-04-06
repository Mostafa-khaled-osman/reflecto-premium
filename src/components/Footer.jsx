import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-[#121212] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tight text-[#FF5C35]">{t('logo')}</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.services_title')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#FF5C35] cursor-pointer"><Link to="/services/paint-correction">{t('footer.service_ppf')}</Link></li>
              <li className="hover:text-[#FF5C35] cursor-pointer"><Link to="/services/window-tint">{t('footer.service_nano')}</Link></li>
              <li className="hover:text-[#FF5C35] cursor-pointer"><Link to="/services/dash-cam">{t('footer.service_dash_cam')}</Link></li>
              <li className="hover:text-[#FF5C35] cursor-pointer"><Link to="/services/nano-ceramic">{t('footer.service_insulation')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.company_title')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#FF5C35] cursor-pointer"><Link to="/">{t('footer.company_about')}</Link></li>
              <li className="hover:text-[#FF5C35] cursor-pointer">{t('footer.company_standards')}</li>
              <li className="hover:text-[#FF5C35] cursor-pointer"><Link to="/pricing">{t('footer.company_pricing')}</Link></li>
              <li className="hover:text-[#FF5C35] cursor-pointer"> <Link to="/contact">{t('footer.company_contact')}</Link> </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.contact_title')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>{t('footer.contact_phone')}: +201092334561</li>
              <li>{t('footer.contact_email')}: contact@reflecto.com</li>
              <li>{t('footer.contact_hours')}: {t('footer.contact_hours_value')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
