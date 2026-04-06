import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(['contact', 'common']);

  const [formData, setFormData] = useState({
    brand: 'Porsche',
    model: '911 GT3 RS',
    year: '2024',
    serviceType: 'Full Protection (PPF)',
    servicePackage: 'Ultimate',
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact:contact_confirmed'));
    window.location.href = '/';
  };

  // Helper class for inputs
  const inputClass = "w-full bg-[#111111] border border-transparent rounded-lg px-4 py-3 text-white text-sm focus:border-white/10 outline-none transition-colors";
  const labelClass = "block text-xs font-bold text-gray-400 mb-2 tracking-wide";

  return (
    <div className="min-h-screen bg-[#111111] pb-24 pt-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display uppercase tracking-widest text-white">
            <span className="text-[#FF4500] font-bold">{t('contact:title_secure')}</span> {t('contact:title_your')} <span className="text-[#FF4500] font-bold">{t('contact:title_protection')}</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto">

          {/* Left Column - Forms */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">

            {/* Vehicle & Service Details Panel */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-5 h-5 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h2 className="text-lg font-display text-white tracking-widest uppercase font-light">{t('contact:vehicle_service_details')}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="md:col-span-2">
                  <label className={labelClass}>{t('contact:car_brand')}</label>
                  <select name="brand" value={formData.brand} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="">{t('contact:select_brand')}</option>
                    <option value="Porsche">{t('contact:brands.porsche')}</option>
                    <option value="Audi">{t('contact:brands.audi')}</option>
                    <option value="BMW">{t('contact:brands.bmw')}</option>
                    <option value="Mercedes">{t('contact:brands.mercedes')}</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>{t('contact:car_model')}</label>
                  <select name="model" value={formData.model} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="">{t('contact:select_model')}</option>
                    <option value="911 GT3 RS">{t('contact:models.gt3')}</option>
                    <option value="R8">{t('contact:models.r8')}</option>
                    <option value="M4">{t('contact:models.m4')}</option>
                    <option value="Cayenne">{t('contact:models.cayenne')}</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>{t('contact:car_year')}</label>
                  <select name="year" value={formData.year} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="">{t('contact:select_year')}</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className={labelClass}>{t('contact:select_service')}</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="">{t('contact:service_placeholder')}</option>
                    <option value="Full Protection (PPF)">{t('contact:services.ppf')}</option>
                    <option value="Ceramic Coating">{t('contact:services.ceramic')}</option>
                    <option value="Thermal Defense">{t('contact:services.thermal')}</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t('contact:service_package')}</label>
                  <select name="servicePackage" value={formData.servicePackage} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="">{t('contact:package_placeholder')}</option>
                    <option value="Ultimate">{t('contact:packages.ultimate')}</option>
                    <option value="Premium">{t('contact:packages.premium')}</option>
                    <option value="Standard">{t('contact:packages.standard')}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Customer Information Panel */}
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-5 h-5 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h2 className="text-lg font-display text-white tracking-widest uppercase font-light">{t('contact:customer_information')}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className={labelClass}>{t('contact:full_name')}</label>
                  <input type="text" name="fullName" placeholder={t('contact:full_name_placeholder')} value={formData.fullName} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t('contact:phone_number')}</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>{t('contact:email_address')}</label>
                  <input type="email" name="email" placeholder={t('contact:email_placeholder')} value={formData.email} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t('contact:preferred_date')}</label>
                  <div className="relative">
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className={`${inputClass} appearance-none`} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t('contact:preferred_time')}</label>
                  <div className="relative">
                    <input type="time" name="time" value={formData.time} onChange={handleChange} className={`${inputClass} appearance-none`} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Summary */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-[#1a1a1a] rounded-xl border border-white/5 p-8 shadow-2xl sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-5 h-5 text-[#FF4500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h2 className="text-lg font-display text-white tracking-widest uppercase font-light">{t('contact:contact_summary')}</h2>
              </div>

              <div className="w-full h-px bg-white/10 mb-8"></div>

              <div className="mb-8">
                <h3 className="text-[#FF4500] text-[10px] uppercase font-bold tracking-[0.2em] mb-4">{t('contact:selected_vehicle')}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400 text-xs">{t('contact:brand')}</span>
                  <span className="text-white text-xs font-bold">{formData.brand || '-'}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400 text-xs">{t('contact:model')}</span>
                  <span className="text-white text-xs font-bold">{formData.model || '-'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{t('contact:year')}</span>
                  <span className="text-white text-xs font-bold">{formData.year || '-'}</span>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-8"></div>

              <div className="mb-10">
                <h3 className="text-[#FF4500] text-[10px] uppercase font-bold tracking-[0.2em] mb-4">{t('contact:selected_service')}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400 text-xs">{t('contact:service_type')}</span>
                  <span className="text-white text-xs font-bold text-right">{formData.serviceType || '-'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{t('contact:package')}</span>
                  <span className="text-white text-xs font-bold">{formData.servicePackage || '-'}</span>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#FF4500] to-[#E63E00] hover:from-[#E63E00] hover:to-[#CC3700] text-white text-[11px] font-bold rounded-full uppercase tracking-[0.2em] transition-all flex items-center justify-center shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:shadow-[0_0_30px_rgba(255,69,0,0.5)]">
                {t('contact:confirm_contact')} <span className="ml-2">→</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
