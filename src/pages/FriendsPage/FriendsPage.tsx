import React from 'react';
import { Page } from '@/components/Page.tsx';
import { useTranslation } from '@/localization/LanguageContext.tsx';
import './FriendsPage.css';

export const FriendsPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Page>
      <div className="friends-page">
        <h1>{t('friends.title')}</h1>
        <p>{t('friends.description')}</p>
      </div>
    </Page>
  );
};