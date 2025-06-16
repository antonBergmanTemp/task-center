import React from 'react';
import { Page } from '@/components/Page.tsx';
import './LeadersPage.css';

export const LeadersPage: React.FC = () => {
  return (
    <Page>
      <div className="leaders-page">
        <h1>Leaders</h1>
        <p>This is the leaderboard page!</p>
      </div>
    </Page>
  );
};