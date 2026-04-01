import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-8xl md:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200 mb-4 drop-shadow-md tracking-tighter">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        {t('not_found_title', 'Page Not Found')}
      </h2>
      <p className="text-gray-400 max-w-md mb-8 text-sm md:text-base leading-relaxed">
        {t('not_found_desc', "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.")}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/"
          className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors duration-300 text-center"
        >
          {t('return_home', 'Return Home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
