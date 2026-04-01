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
    titleKey: 'services:paint_protection_title',
    descriptionKey: 'services:paint_protection_description',
    featuresKeys: [
      'services:paint_protection_feature_0',
      'services:paint_protection_feature_1',
      'services:paint_protection_feature_2'
    ],
    imageUrl: '/assets/photo/landing services.jpeg',
    path: '/services/paint-correction',
    icon: 'shield'
  },
  {
    id: 'nano-ceramic',
    titleKey: 'services:nano_ceramic_title',
    descriptionKey: 'services:nano_ceramic_description',
    featuresKeys: [
      'services:nano_ceramic_feature_0',
      'services:nano_ceramic_feature_1',
      'services:nano_ceramic_feature_2'
    ],
    imageUrl: '/assets/photo/landaig services.jpeg',
    path: '/services/advanced-insulation',
    icon: 'water_drop'
  },
  {
    id: 'paint-correction',
    titleKey: 'services:paint_correction_title',
    descriptionKey: 'services:paint_correction_description',
    featuresKeys: [
      'services:paint_correction_feature_0',
      'services:paint_correction_feature_1',
      'services:paint_correction_feature_2'
    ],
    imageUrl: '/assets/photo/landing servicesss.jpeg',
    path: '/services/paint-correction',
    icon: 'star'
  },
  {
    id: 'thermal-insulation',
    titleKey: 'services:thermal_insulation_title',
    descriptionKey: 'services:thermal_insulation_description',
    featuresKeys: [
      'services:thermal_insulation_feature_0',
      'services:thermal_insulation_feature_1',
      'services:thermal_insulation_feature_2'
    ],
    imageUrl: '/assets/photo/landing servicess.jpeg',
    path: '/services/thermal-defense',
    icon: 'light_mode'
  },
  {
    id: 'dash-cam-systems',
    titleKey: 'services:dash_cam_title',
    descriptionKey: 'services:dash_cam_description',
    featuresKeys: [
      'services:dash_cam_feature_0',
      'services:dash_cam_feature_1',
      'services:dash_cam_feature_2'
    ],
    imageUrl: '/assets/photo/dash-came.jpeg',
    path: '/services/dash-cam',
    icon: 'videocam'
  },
  {
    id: 'window-tinting',
    titleKey: 'services:window_tinting_title',
    descriptionKey: 'services:window_tinting_description',
    featuresKeys: [
      'services:window_tinting_feature_0',
      'services:window_tinting_feature_1',
      'services:window_tinting_feature_2'
    ],
    imageUrl: '/assets/photo/car.jpg',
    path: '/services/window-tint',
    icon: 'directions_car'
  }
];

export const PRICING_TIERS = [
  {
    id: 'basic',
    nameKey: 'pricing:tiers.basic.name',
    price: '1,200',
    taglineKey: 'pricing:tiers.basic.tagline',
    isPopular: false,
    featuresKeys: [
      'pricing:tiers.basic.features.0',
      'pricing:tiers.basic.features.1',
      'pricing:tiers.basic.features.2',
      'pricing:tiers.basic.features.3',
      'pricing:tiers.basic.features.4'
    ]
  },
  {
    id: 'silver',
    nameKey: 'pricing:tiers.silver.name',
    price: '1,400',
    taglineKey: 'pricing:tiers.silver.tagline',
    isPopular: true,
    featuresKeys: [
      'pricing:tiers.silver.features.0',
      'pricing:tiers.silver.features.1',
      'pricing:tiers.silver.features.2',
      'pricing:tiers.silver.features.3',
      'pricing:tiers.silver.features.4',
      'pricing:tiers.silver.features.5'
    ]
  },
  {
    id: 'diamond',
    nameKey: 'pricing:tiers.diamond.name',
    price: '1,800',
    taglineKey: 'pricing:tiers.diamond.tagline',
    isPopular: false,
    featuresKeys: [
      'pricing:tiers.diamond.features.0',
      'pricing:tiers.diamond.features.1',
      'pricing:tiers.diamond.features.2',
      'pricing:tiers.diamond.features.3',
      'pricing:tiers.diamond.features.4',
      'pricing:tiers.diamond.features.5',
      'pricing:tiers.diamond.features.6'
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
    car: 'BMW 7 Series',
    date: '11/12/2024',
    price: 'SAR 11,800',
    points: '+1721 pts'
  },
  {
    id: '3',
    service: 'Nano Ceramic Coating',
    car: 'Toyota Land Cruiser',
    date: '11/12/2024',
    price: 'SAR 4,200',
    points: '+1123 pts'
  },
  {
    id: '4',
    service: 'Window Tinting',
    car: 'Chevrolet Silverado',
    date: '10/12/2024',
    price: 'SAR 1,800',
    points: '+534 pts'
  },
  {
    id: '5',
    service: 'Paint Correction',
    car: 'Ford Mustang',
    date: '10/12/2024',
    price: 'SAR 3,500',
    points: '+921 pts'
  },
  {
    id: '6',
    service: 'Paint Protection Film Full Body',
    car: 'Porsche 911',
    date: '10/12/2024',
    price: 'SAR 15,500',
    points: '+2301 pts'
  }
];

export const USER_POINTS = 5847;
export const USER_LEVEL = 'Gold';
