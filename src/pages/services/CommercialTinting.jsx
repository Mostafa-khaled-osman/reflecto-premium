import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CommercialTinting = () => {
  const { t, i18n } = useTranslation(['commercial_tint']);
  const isRTL = i18n.language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال طلب العرض! سيتواصل معك فريقنا خلال 24 ساعة.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const residentialFeatures = [
    {
      icon: 'thermostat',
      title: t('commercial_tint:residential.heat_reduction.title', 'تقليل الحرارة'),
      description: t('commercial_tint:residential.heat_reduction.desc', 'تقنية سيراميك متقدمة تحجب حتى 98% من الحرارة الشمسية، مما يقلل بشكل كبير تكاليف الطاقة ويزيد الراحة.')
    },
    {
      icon: 'visibility_off',
      title: t('commercial_tint:residential.privacy.title', 'التحكم بالخصوصية'),
      description: t('commercial_tint:residential.privacy.desc', 'تحقيق أمان بصري كامل خلال النهار دون التضحية بإطلالتك على العالم الخارجي.')
    },
    {
      icon: 'shield',
      title: t('commercial_tint:residential.uv_protection.title', 'حماية من الأشعة فوق البنفسجية'),
      description: t('commercial_tint:residential.uv_protection.desc', 'حجب 99.9% من الأشعة فوق البنفسجية الضارة التي تسبب بهتان الأثاث وتلف الجلد. حماية شاملة للداخلية.')
    }
  ];

  const commercialFeatures = [
    {
      icon: 'security',
      title: t('commercial_tint:commercial.security.title', 'الأمان والتخفيف من الانفجارات'),
      description: t('commercial_tint:commercial.security.desc', 'أفلام أمان سميكة مصممة لإبقاء الزجاج متحداً عند الصدمة، حماية الأصول والموظفين من التعدي أو الكوارث الطبيعية.')
    },
    {
      icon: 'eco',
      title: t('commercial_tint:commercial.energy.title', 'تحسين الطاقة'),
      description: t('commercial_tint:commercial.energy.desc', 'تقليل تكاليف التبريد بنسبة تصل إلى 30%. أفلامنا تُسدد تكاليفها من خلال وفورات التشغيل خلال 24-36 شهراً.')
    },
    {
      icon: 'light_mode',
      title: t('commercial_tint:commercial.glare.title', 'تقليل الوهج'),
      description: t('commercial_tint:commercial.glare.desc', 'القضاء على وهج الشاشة وإرهاق العين في مكان العمل، مما يعزز إنتاجية الموظفين وراحة البصر.')
    }
  ];

  const portfolioItems = [
    {
      span: 'col-span-2 row-span-2',
      category: t('commercial_tint:portfolio.private_residence', 'سكن خاص'),
      title: t('commercial_tint:portfolio.obsidian_flat', 'شقة أوبسيديان'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVjP1aszyXrlU97AhPRoaqwRx3dJ7xMa9PtLfq0NyCc233tM7K_6Mj0GNVSnWVmXVP1kurNvmnJsPn39DYyscxFG0XeDcMzZdBjJ7ncxzeAmaWtNgcDAvZph2fyMl_6h3xpvgvoBYXDfIJ2TSRekwkcbUUygijYW-FB0lAK-aN85ixOsxTn0Wq3hPaoBDekv5RON6jGznwFXzyElH88qngN5omrjsa7mqbRWZRm8pkbR_pYv7jFXwMG_QP6S4IZq3RS13PfRSFNFQ',
      alt: 'Luxury penthouse interior with floor to ceiling windows showing a dramatic city skyline through subtle dark tinting'
    },
    {
      span: 'col-span-2',
      category: t('commercial_tint:portfolio.commercial', 'تجاري'),
      title: t('commercial_tint:portfolio.axon_center', 'مركز أكسون'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHlrh-zGodOWG_HSWjl6JPXSzzFrywYqvbF4iZ321aNWb6RydQluaZpKcYsxJlWQ2zOzfIACznkj5K3FOINekKPIoBLbspx_pvHYTqww8F4cvPBiyHDvNYmPyJGi7KXz3oWvH9YZDhZOBlZrDPUjIDhpu68OC3IvuDh4o0lX1ijAe501NuBeXDdUDBpHtilOI7T_YWB9gdX1I3rwKQwCvZ_v_-T-_bb4JrbsnpNbWuU5ZDHshReKFO4rNTuITxDZVHhDDwAdrJnVg',
      alt: 'Wide angle shot of a modern glass office building with deep blue tint reflecting the city surroundings'
    },
    {
      span: '',
      category: '',
      title: t('commercial_tint:portfolio.zenith_poolhouse', 'منزل حوض السباحة زينيث'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIsB1cmOWmS4cfrkuCQPszuqcnNWrX-tn97GS7RhUKC6gSnSoXMnPQPK_wrBldUSFKv3391uyfTtZ9o9kucga8j-KgNhw7go5W-8jaYcDxLSfGDbgTggKjw4MXubdQ8Wc2uFgkpg0p9NEltS51Qa5h66KMXBneJmfJBmTQ9t9Y9kyYZa5TofpXZarO9-qY3fd20BF1ADh3-TCgdTC1ljSc1-Uv-E1Ffg5L9LAQD6hZdp4ioi9o88bvACRldiGGmBjkKfNoc834nVc',
      alt: 'Modern minimalist pool house with mirrored glass windows providing privacy and sleek aesthetic'
    },
    {
      span: '',
      category: '',
      title: t('commercial_tint:portfolio.virtue_labs', 'مختبرات فيرتو'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe72YKB8aaDg4MMiu2J6dLy3__J1XwwCtdXI8eegGx1YDQFWxhnp9Bh7ZPpYTomQpqViLAlC9RloNfSFkPvxbYCz-S8R6w4AMZ67CGWaclyVsyX-73Tblik_f5ciyEPKtZP8DGN6E2xBwcGP0HePzW2EJZHNmCTfQUhA7BTmQJcARQ0X-Kcy3pCkibhe0feFdtOTtTK34woSixKIKY-coRQTwGp_U337Ysffe47ou6et4s8zbc4W1OKo_mfkWD7wo4Adk2o-jd6iQ',
      alt: 'Modern tech office interior with decorative frosted glass partitions and window tinting'
    }
  ];

  return (
    <div className={`min-h-screen bg-[#0e0e0e] text-white pt-20 font-body ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Hero Section */}
      <section className="relative h-[870px] w-full flex items-center overflow-hidden bg-[#0e0e0e]">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury modern home with dark tinted windows"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNJsVh5v5_l6wZ0_DtKBpVYuOnX51aRBH0hAczjR9A5hfMJUYiLFi8sfiskkiU4W9DhIV5lNwW0cYbYYWiSlIhzkzL8LbAs_pZFmrGCBQzKH6cEAdZGFqh22EinXyXGnFq3xv-kRCsksiJFLUuG9ik1QgdHRW27JlROO8_3bhfzfRB6uqODbAYnhbCjlN7Dx6Eo33S5mdQdJngzjuZ4rXsK9qTAhlCTXglpgjYpTPSLpRQVMBKqatXQu8HbugGyoUPQIW80KD0EKI"
          />
          <div className={`absolute inset-0 bg-gradient-to-${isRTL ? 'l' : 'r'} from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent`}></div>
        </div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-8 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="max-w-2xl">
            <span className={`text-[#ff8d87] font-headline tracking-[0.3em] text-sm font-bold uppercase mb-4 block ${isRTL ? 'text-right' : ''}`}>
              {t('commercial_tint:hero.badge', 'هندسة دقيقة')}
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-white mb-6">
              {t('commercial_tint:hero.title', 'معمارية')} <br/>
              <span className="text-[#adaaaa]">{t('commercial_tint:hero.subtitle', 'أوبسيديان.')}</span>
            </h1>
            <p className="text-lg text-[#adaaaa] mb-10 max-w-md leading-relaxed">
              {t('commercial_tint:hero.description', 'رفض حراري متفوق وخصوصية بصرية للفلل الفاخرة وبيئات العمل عالية المخاطر.')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-gradient-to-r from-[#ff8d87] to-[#ff7670] text-black px-8 py-4 font-bold tracking-tight flex items-center gap-3 hover:scale-95 transition-all">
                {t('commercial_tint:hero.explore', 'استكشف الحلول')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="border border-[#484847]/30 text-[#ff8d87] px-8 py-4 font-bold tracking-tight hover:bg-[#2c2c2c] transition-all">
                {t('commercial_tint:hero.case_studies', 'عرض دراسات الحالة')}
              </button>
            </div>
          </div>
        </div>
        
        {/* Telemetry Stats */}
        <div className={`absolute bottom-12 ${isRTL ? 'left-8' : 'right-8'} hidden lg:flex gap-12 font-headline ${isRTL ? 'border-r border-l-0' : 'border-l border-r-0'} border-[#484847]/20 pl-8`}>
          <div>
            <div className="text-xs text-[#adaaaa] uppercase tracking-widest mb-1">{t('commercial_tint:stats.heat_rejection', 'رفض الحرارة')}</div>
            <div className="text-4xl font-bold text-white tracking-tighter">98%</div>
          </div>
          <div>
            <div className="text-xs text-[#adaaaa] uppercase tracking-widest mb-1">{t('commercial_tint:stats.uv_protection', 'حماية الأشعة')}</div>
            <div className="text-4xl font-bold text-white tracking-tighter">99.9%</div>
          </div>
          <div>
            <div className="text-xs text-[#adaaaa] uppercase tracking-widest mb-1">{t('commercial_tint:stats.ir_blocking', 'حجب الأشعة')}</div>
            <div className="text-4xl font-bold text-white tracking-tighter">95%</div>
          </div>
        </div>
      </section>

      {/* Residential Solutions */}
      <section className="py-24 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-white mb-6">
                {t('commercial_tint:residential.title', 'حلول سكنية')}
              </h2>
              <p className="text-[#adaaaa] max-w-xl text-lg">
                {t('commercial_tint:residential.description', 'ارتقِ بمساحات معيشتك مع أفلام تحمي داخلك مع الحفاظ على الوضوح المثالي. نتعامل مع منزلك كمعرض فني.')}
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-end">
              <div className="h-[1px] w-full bg-[#484847]/20 mb-4"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {residentialFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1a1a1a] p-8 outline outline-1 outline-[#484847]/15 hover:bg-[#2c2c2c] transition-all group">
                <div className="w-12 h-12 flex items-center justify-center bg-[#ff8d87]/10 text-[#ff8d87] mb-8 group-hover:shadow-[0_0_8px_#ff7351,0_0_2px_#ff7351] transition-all">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-white mb-4">{feature.title}</h3>
                <p className="text-[#adaaaa] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Expertise */}
      <section className="py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-8">
          <div className={`flex flex-col lg:flex-row-reverse gap-16 items-center`}>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video lg:aspect-square">
                <img 
                  alt="Modern glass office building with professional window tint"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ph4S-wG6Dv_2VEixlEqBIH0GRCekSNRqPyvnH3NCNPug8wsPT4-4eVH9QmrULi2-O6nK_LTa-D4QbCqGMKnjphEXWadiv_dfaYd1CHBAlUbcP1M5d3cy_O4sQY9cXzqllL8_G5XxXRKPbAeQtbz0VCwIQZrhrwC4BhWxrHE8h0GaM8Vq8ML4uInXwTTihHGQnN2W0hnOsPwT2DSbQvdJLRXydFhrO6PGYE8mRq2zopUT-VmzkDqewhwrlL7gyzheE2ohekK6op8"
                />
                <div className={`absolute -bottom-6 ${isRTL ? 'right-6 border-l-0 border-r-4' : 'left-6 border-l-4 border-r-0'} bg-[#1a1a1a] p-6 border-[#ff8d87]`}>
                  <div className="text-3xl font-headline font-bold text-white tracking-tighter">
                    {t('commercial_tint:commercial.leed_certified', 'معتمد LEED')}
                  </div>
                  <div className="text-xs text-[#adaaaa] tracking-widest mt-1">
                    {t('commercial_tint:commercial.leed_standard', 'معيار كفاءة الطاقة')}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-[#ff8d87] font-headline tracking-[0.2em] text-xs font-bold uppercase mb-4 block">
                {t('commercial_tint:commercial.enterprise', 'مستوى المؤسسات')}
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-white mb-8">
                {t('commercial_tint:commercial.title', 'خبرة')} <br/>
                {t('commercial_tint:commercial.subtitle', 'تجارية')}
              </h2>
              <div className="space-y-10">
                {commercialFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="text-[#ff8d87] pt-1">
                      <span className="material-symbols-outlined">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-headline font-bold text-lg mb-2 uppercase tracking-wide">{feature.title}</h4>
                      <p className="text-[#adaaaa] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-headline font-bold tracking-tighter text-white uppercase">
              {t('commercial_tint:portfolio.title', 'أعمالنا')}
            </h2>
            <div className="w-20 h-1 bg-[#ff8d87] mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden group ${item.span || ''}`}
              >
                <img 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent opacity-60"></div>
                <div className={`absolute ${index === 0 || index === 1 ? 'bottom-6' : 'bottom-4'} ${isRTL ? 'right-6 text-right' : 'left-6 text-left'} ${index === 0 || index === 1 ? (isRTL ? 'right-6' : 'left-6') : (isRTL ? 'right-4' : 'left-4')}`}>
                  {item.category && (
                    <span className="text-xs text-[#ff8d87] font-bold tracking-[0.2em] uppercase">{item.category}</span>
                  )}
                  <h4 className={`text-white font-headline font-bold uppercase mt-1 ${index === 0 ? 'text-xl' : 'text-sm'}`}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default CommercialTinting;