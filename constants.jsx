
import React from 'react';

export const COLORS = {
  primary: '#FF5C35',
  bgDark: '#1a1a1a',
  bgLight: '#262626',
  textGray: '#9CA3AF'
};

export const SERVICES = [
  {
    id: 'paint-protection',
    title: 'Paint Protection',
    description: 'Military-grade self-healing protection for your vehicle\'s paint',
    features: ['Self-Healing Technology', '10-Year Warranty', 'US/Canadian Film'],
    imageUrl: '/photo/landing services.jpeg',
    icon: '🛡️'
  },
  {
    id: 'nano-ceramic',
    title: 'Nano Ceramic Coating',
    description: 'Professional-grade hydrophobic coating for ultimate shine',
    features: ['9H Hardness', 'Hydrophobic effect', '5-Year protection'],
    imageUrl: '/photo/landaig services.jpeg',
    icon: '💧'
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction-Polishing',
    description: 'Restore factory finish with multi-stage paint correction',
    features: ['Swirl Removal', 'Scratch Correction', 'Mirror Finish'],
    imageUrl: '/photo/landing servicesss.jpeg',
    icon: '⭐'
  },
  {
    id: 'thermal-insulation',
    title: 'Thermal Insulation',
    description: 'Premium window tinting for heat rejection and privacy',
    features: ['UV Protection', 'Heat Rejection', 'Factory Look finish'],
    imageUrl: '/photo/landing servicess.jpeg',
    icon: '☀️'
  },
  {
    id: 'dash-cam-systems',
    title: 'Dash Cam Systems',
    description: 'Capture every moment on the road with high definition recording and 24/7 parking',
    features: ['4K resolution', 'cloud connectivity'],
    imageUrl: '/photo/dash-came.jpeg',
    icon: '⭐'
  },
  {
    id: 'window-tinting',
    title: 'Window Tinting',
    description: 'Capture every moment on the road with high definition recording and 24/7 parking',
    features: ['99% UV rejection', 'Heat reduction'],
    imageUrl: '/photo/car.jpg',
    icon: '☀️'
  }
];

export const PRICING_TIERS = [
  {
    id: 'basic',
    name: 'Basic',
    price: '1,200',
    tagline: 'Essential protection for daily drivers',
    features: [
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection',
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection',
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection'
    ]
  },
  {
    id: 'silver',
    name: 'Silver',
    price: '1,400',
    tagline: 'Enhanced protection for daily drivers',
    isPopular: true,
    features: [
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection',
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection',
      '9H Hardness',
      'Hydrophobic effect'
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: '1,800',
    tagline: 'Premium protection for luxury vehicles',
    features: [
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection',
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection',
      '9H Hardness',
      'Hydrophobic effect',
      '5-Year protection'
    ]
  }
];

export const SERVICE_HISTORY = [
  {
    id: '1',
    service: 'Paint Protection Film Full Body',
    car: 'Mercedes-Benz S-Class',
    date: '11/12/2024',
    price: 'SAR 12,500',
    points: '+1823 pts'
  },
  {
    id: '2',
    service: 'Paint Protection Film Full Body',
    car: 'Mercedes-Benz S-Class',
    date: '11/12/2024',
    price: 'SAR 12,500',
    points: '+1823 pts'
  },
  {
    id: '3',
    service: 'Paint Protection Film Full Body',
    car: 'Mercedes-Benz S-Class',
    date: '11/12/2024',
    price: 'SAR 12,500',
    points: '+1823 pts'
  }
];
