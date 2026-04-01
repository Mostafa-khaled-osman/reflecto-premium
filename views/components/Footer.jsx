import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <footer className="bg-[#121212] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate('/')}>
              <span className="text-2xl font-bold tracking-tight text-[#FF5C35]">{t('logo')}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.services_title')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/thermal-defense')}>{t('footer.service_ppf')}</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/window-tint')}>{t('footer.service_nano')}</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/paint-correction')}>{t('footer.service_polishing')}</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/advanced-insulation')}>{t('footer.service_insulation')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.company_title')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/')}>{t('footer.company_about')}</li>
              <li className="hover:text-[#FF5C35] cursor-pointer">{t('footer.company_standards')}</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/pricing')}>{t('footer.company_pricing')}</li>
              <li className="hover:text-[#FF5C35] cursor-pointer">{t('footer.company_contact')}</li>
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
