import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { bem } from '@/css/bem.ts';
import { useTranslation } from '@/localization/LanguageContext.tsx';
import './Toolbar.css';

const [b, e] = bem('toolbar');

export const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const currentPath = location.pathname;

  return (
    <div className={b()}>
      <div 
        className={e('item', { active: currentPath === '/leaders' })}
        onClick={() => navigate('/leaders')}
      >
        <div className={e('icon', 'leaders')} />
        <span className={e('label')}>{t('toolbar.leaders')}</span>
      </div>
      
      <div 
        className={e('item', { active: currentPath === '/home' })}
        onClick={() => navigate('/home')}
      >
        <div className={e('icon', 'home')} />
        <span className={e('label')}>{t('toolbar.home')}</span>
      </div>
      
      <div 
        className={e('item', { active: currentPath === '/friends' })}
        onClick={() => navigate('/friends')}
      >
        <div className={e('icon', 'friends')} />
        <span className={e('label')}>{t('toolbar.friends')}</span>
      </div>
    </div>
  );
};