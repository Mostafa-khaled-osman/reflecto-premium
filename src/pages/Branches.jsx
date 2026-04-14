import React from 'react';
import { Link } from 'react-router-dom';

const Branches = () => {
  const branches = [
    {
      id: 1,
      name: 'Riyadh HQ',
      location: 'KAFD, North District, Riyadh',
      tag: 'Primary Command',
      tagColor: 'bg-orange-600',
      span: 'col-span-8',
      height: 'h-[450px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrJz2giTVIVCaMmZkt8AndQl0nG8RXRIOQEG9gXlvyU1cUmfuwV11xijxHPBS-1Be0qv-gAMkI_XydTEnFaK6vz-dx9Xoj4jmnPOwSFkOyN5EBmv-AU9T0wyKfrNnx5A9l3OxRTSNcYFtD8mgRDjpRXKv7PzMvdcdaMSPi8b3BNVOMd-qvit4YWI0XYhJf0T4FqgJYH3ozgC7cmjYPBhU70KPM6vxMKpkb5nMsHh3sWlKk2sFHMJwVoLZeHeNhyWmZ6Ck_-FP_7d8S',
      alt: 'Modern Riyadh skyline featuring KAFD skyscrapers with a futuristic lighting aesthetic',
      buttonText: 'View Details'
    },
    {
      id: 2,
      name: 'Jeddah Gateway',
      location: 'King Abdullah St, Waterfront, Jeddah',
      tag: null,
      tagColor: '',
      span: 'col-span-4',
      height: 'h-[450px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNlw2TKf7EsSuRyAf_NjJFdCAOGAmFb-WxoULlR6k_tX2j9P9PVjt-fimH__knd-n0V5myfNTs6h8oiCvcPbmbZ3tN37gGXI9c_eCfu8xNRaT9Q0KzJhfwW-zeRVC8I_5pJ6FwVVFQSbilQNcNlZOCYrCm-fK1ogxa7GBZN9-BXwTpYRGNcw3j9u6axgmVXLmRsiHVIMracyah9sr5Q2WB-1Y7odKlTtuqRxHjjTulxEOv1gTpgcuEW2C6wPK2V9-OrNdZxuEP9WQC',
      alt: 'Modern architecture in Jeddah near the Red Sea coastline at night',
      buttonText: 'Details'
    },
    {
      id: 3,
      name: 'Neom Innovation',
      location: 'The Line Logistics Sector, NEOM',
      tag: null,
      tagColor: '',
      span: 'col-span-4',
      height: 'h-[450px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSgLVM6igmujJEqw3-CjilhyIRqjrC1mL_MFgnzanXdi470zlWwWWS4L4dV-pFT3ibi19Kpc2EnEy69Pr6poFe5K5TEwMhhk01MSMvYDkpOyYgObxTon5QcMEwBVWvHZQNYBOUO4luPhR_ajaZjWJJYdBTug2v9bQO9IP1rx7ESuSzyt2G6DfE2he4zuwxvyX1IRO9Fl4rxkJcellgQUfJ18P0aWND-zrcmH-R-q80-feAP86oUWO4Salr5kTl2lXePPhrS3TmyWkL',
      alt: 'Futuristic architectural concept representative of NEOM construction',
      buttonText: 'Details'
    },
    {
      id: 4,
      name: 'Dammam Port',
      location: 'King Abdulaziz Port District, Dammam',
      tag: 'Industrial Link',
      tagColor: 'bg-white text-black',
      span: 'col-span-8',
      height: 'h-[450px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy_EaubnPQIOvJfotAGxZyMYLO8yQNdRx3aOwVbBIlxw5kG1Y-U_7EskmJWe8ypP-Yx8dCSB6A1ndGQiGlOtYOynvSAB48tsmjdbuNgkHXEWI3oUg_lnglRuCLCTwpcz_osFjbAaKjJtdVS87JpO52JQgvkQDD-GJv7GPxfBu0cYueB2XxwIFAbjiDjgwQLxpK1wR0jQlYLhiQnKDXBlp3lXJ7VxXrTzOlT7nyID7pbFgxhu0uyUiMMuzIrPSbekFVXxi8ZtMWaxwp',
      alt: 'Industrial port facilities at night with heavy lighting and shipping cranes',
      buttonText: 'Explore Facility'
    },
    {
      id: 5,
      name: 'Al Khobar',
      location: 'Prince Turki St, Al Khobar',
      tag: null,
      tagColor: '',
      span: 'col-span-3',
      height: 'h-[350px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsD99vE9jJlodD4I-aO6baRyB7Rit76Yq27x709vePR3n40EzvuIJAcsEd_GOzVr4BMzNjODBFGFQywNbivT9PAqzaBYsTFDKAOBx4mOyGjNOc1xpI9CEmiH6e43xBPLEd2DwaCDSViKYyyUsbTah-gYLXVkIeMgM16EI8je9axY9GINh1VfcIbUfQq9JOP1qTa13cZX1-jNL69c54RwlKg_JOSD4hB0zK6EAuBxe137NBqBsVNADiGd5k9gbmP54uSbkQ7s6BSblc',
      alt: 'Modern Al Khobar office building with glass exterior',
      buttonText: 'Details'
    },
    {
      id: 6,
      name: 'Madinah',
      location: 'Knowledge Economic City, Madinah',
      tag: null,
      tagColor: '',
      span: 'col-span-3',
      height: 'h-[350px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP1WZjbdDSZs6vBsnN7qG78zofJWqGe-PsdcKSIgw55Inf7qOmH1GgcORqEX7ZzlPZxgrQSFWuj663TfgTAdlXSasFFByjueWKFdmn_YhEi4cMWeTzxSEC4qY1YfobFElpUyLtmurQ_r_eKqHlgPTsAPo_cKTtKScfV3F4pHCIrCYq5xrm5gKU1QvMw1VY_Gr2XJn-hjyCGFrTlH9JuPta9jrfxlY9NYq3UWRniUCrgV_dicW78fP8NhoJpbyD2wOttgsmOdNvCORq',
      alt: 'Sleek modern warehouse and logistics center in Madinah',
      buttonText: 'Details'
    },
    {
      id: 7,
      name: 'Makkah Hub',
      location: 'King Abdulaziz Rd, Makkah',
      tag: null,
      tagColor: '',
      span: 'col-span-3',
      height: 'h-[350px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDujPklra-4U-azHIJ9Gw2L6z9nLWTAusLF8mdoKNrFd_SE_kggwzNpCBq1nI72Ys0Dd09UeTKGIAwkogBGmxtIFikZ5iUMpEE2bO-anByo42EPvKlWrB_9QZQ2WBuVsWmkyCUdlUc31N7Ugf9znUaD2QDrUOXx4OpMulpTCx7m2S572rDG7ODJhcSiC2AVueTh3XiBkGVjTzJP_cd1mmh87h1Va97MYswgMxm9nIiCW5gKQ1dynmo8XWfFz7ZUOAvV70ehgvqKb4Uq',
      alt: 'The clock tower and modern architecture in Makkah',
      buttonText: 'Details'
    },
    {
      id: 8,
      name: 'Abha Heights',
      location: 'Southern Province, Abha',
      tag: null,
      tagColor: '',
      span: 'col-span-3',
      height: 'h-[350px]',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz7kL8mF9nJ2qR4hT5uV6wX7yZ8aA9bBcCdDeEfFgGhHiJkLmMnNoOpPqQrRsStTuVvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
      alt: 'Mountain landscape with modern facilities in Abha region',
      buttonText: 'Details'
    }
  ];

  const statistics = [
    { number: '08', label: 'Strategic Branches' },
    { number: '13', label: 'Regions Covered' },
    { number: '100%', label: 'KSA Availability' }
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-white pt-8">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-6 lg:px-12">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black"></div>
          <img 
            className="w-full h-full object-cover grayscale opacity-20 mix-blend-screen" 
            alt="High-tech topological map of the Saudi Arabian peninsula with glowing network nodes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuUcz5Wg2kQW5mLXmCEdps_sRqnZCrMEy7Js0z844i8dwCigA8fCn7MX9zo5_sPeYKzVvCwI8yNJALnZGHbL3QQ2rG8S8Xsk210Mfh8DPxwc183HMqsuYvFsm-y1hQxSSaXI1RzIQ9I7hb27FkXnkHAmkqwBgFxN3vbT1P87KpELXFt4RlULBF_a73JYz8hX3vW4CiOMd3VENTwO9_sUafzMUf7OUDaGnmaE2QuulJE8JobMYekNK6pw_EU6FvazBl5xMbCJSSt71"
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none italic">
            Kingdom <span className="text-orange-600 italic">Branches</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 uppercase tracking-[0.3em] font-light mb-12 max-w-3xl mx-auto">
            Our strategic network of branches across Saudi Arabia\'s key economic regions.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-7xl font-black text-white mb-2 italic">{stat.number}</span>
                <span className="text-orange-600 text-sm tracking-[0.4em] font-bold uppercase">{stat.label}</span>
                <div className="w-12 h-1 bg-orange-600/30 mt-6 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-orange-600 text-sm font-bold tracking-[0.5em] uppercase mb-4">Strategic Assets</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">Kingdom Network</h3>
          </div>
          <div className="text-gray-500 max-w-md text-sm uppercase tracking-widest leading-relaxed">
            Deploying elite logistical infrastructure across the Kingdom\'s most vital economic landscapes.
          </div>
        </div>

        {/* Location Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {branches.map((branch) => (
            <div 
              key={branch.id}
              className={`${branch.span} group relative rounded-xl ${branch.height} overflow-hidden border border-white/5 bg-[#1A1A1A]`}
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                alt={branch.alt}
                src={branch.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 p-12 w-full flex justify-between items-end">
                <div>
                  {branch.tag && (
                    <span className={`inline-block px-3 py-1 ${branch.tagColor} text-white text-[10px] font-black uppercase mb-4`}>
                      {branch.tag}
                    </span>
                  )}
                  <h4 className={`font-black uppercase text-white mb-2 ${branch.span === 'col-span-8' ? 'text-5xl' : 'text-3xl'}`}>
                    {branch.name}
                  </h4>
                  <p className="text-gray-400 text-sm tracking-widest uppercase">{branch.location}</p>
                </div>
                <button className="flex items-center gap-2 group/btn border border-white/20 hover:border-orange-600 px-6 py-3 rounded-lg transition-all">
                  <span className="text-xs font-bold uppercase tracking-widest text-white group-hover/btn:text-orange-600">
                    {branch.buttonText}
                  </span>
                  <span className="material-symbols-outlined text-orange-600 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Branches;