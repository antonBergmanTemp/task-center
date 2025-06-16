import React from 'react';
import { Page } from '@/components/Page.tsx';
import { useTranslation } from '@/localization/LanguageContext.tsx';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Page>
      <div className="home-page">
        <h1>{t('home.title')}</h1>
        <p>{t('home.description')}</p>
      </div>
    </Page>
  );
};