import React, { useState, useEffect, useRef } from 'react';
import { bem } from '@/css/bem.ts';
import { AboutModal } from '@/components/AboutModal/AboutModal.tsx';
import { useTranslation } from '@/localization/LanguageContext.tsx';
import { Language } from '@/localization/translations.ts';
import globalIcon from '@/assets/icons/global.png';
import './Header.css';

const [b, e] = bem('header');

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <>
      <header className={b()}>
        <button 
          className={e('about-btn')} 
          aria-label={t('common.about')}
          onClick={() => setIsAboutModalOpen(true)}
        >
          <span className={e('about-icon')}>?</span>
        </button>
        
        <div className={e('language-switcher')} ref={dropdownRef}>
          <button 
            className={e('language-btn')} 
            onClick={toggleLanguageDropdown}
            aria-label="Change language"
          >
            <span className={e('globe-icon')}>
              <img src={globalIcon} alt="Language" width="20" height="20" />
            </span>
            <span className={e('language-text')}>{t('common.language')}</span>
            <span className={e('arrow', { up: isLanguageOpen })}>&#60;</span>
          </button>
          
          {isLanguageOpen && (
            <div className={e('dropdown')}>
              <button 
                className={e('dropdown-item', { active: language === 'ENG' })}
                onClick={() => changeLanguage('ENG')}
              >
                ENG
              </button>
              <button 
                className={e('dropdown-item', { active: language === 'RUS' })}
                onClick={() => changeLanguage('RUS')}
              >
                RUS
              </button>
            </div>
          )}
        </div>
      </header>
      
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
    </>
  );
};