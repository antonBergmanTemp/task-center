import React from 'react';
import { bem } from '@/css/bem.ts';
import { useTranslation } from '@/localization/LanguageContext.tsx';
import './AboutModal.css';

const [b, e] = bem('about-modal');

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  
  if (!isOpen) return null;

  return (
    <div className={b()}>
      <div className={e('overlay')} onClick={onClose} />
      <div className={e('content')}>
        <button className={e('close')} onClick={onClose}>×</button>
        <h2 className={e('title')}>{t('about.title')}</h2>
        <div className={e('body')}>
          <p>{t('about.description')}</p>
          <p>{t('about.version')}</p>
          <p>{t('about.creator')}</p>
        </div>
      </div>
    </div>
  );
};