
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#121212] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate('/')}>
              <span className="text-2xl font-bold tracking-tight text-[#FF5C35]">Reflecto</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium car protection services using US & Canadian materials in dust-free environments.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/thermal-defense')}>Paint Protection Film</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/window-tint')}>Nano Ceramic Coating</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/paint-correction')}>Premium Polishing</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/services/advanced-insulation')}>Thermal Insulation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/')}>About Us</li>
              <li className="hover:text-[#FF5C35] cursor-pointer">Our Standards</li>
              <li className="hover:text-[#FF5C35] cursor-pointer" onClick={() => navigate('/pricing')}>Pricing</li>
              <li className="hover:text-[#FF5C35] cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Phone: +201092334561</li>
              <li>Email: contact@reflecto.com</li>
              <li>Hours: Mon-Sat, 8AM-7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          ©2026 Reflecto. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
