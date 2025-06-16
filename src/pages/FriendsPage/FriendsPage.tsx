import React from 'react';
import { Page } from '@/components/Page.tsx';
import './FriendsPage.css';

export const FriendsPage: React.FC = () => {
  return (
    <Page>
      <div className="friends-page">
        <h1>Friends</h1>
        <p>Connect with your friends here!</p>
      </div>
    </Page>
  );
};