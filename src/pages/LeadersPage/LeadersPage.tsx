import React from 'react';
import { Page } from '@/components/Page.tsx';
import { useTranslation } from '@/localization/LanguageContext.tsx';
import './LeadersPage.css';

export const LeadersPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Page>
      <div className="leaders-page">
        <h1>{t('leaders.title')}</h1>
        <p>{t('leaders.description')}</p>
      </div>
    </Page>
  );
};