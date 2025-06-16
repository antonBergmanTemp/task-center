import React from 'react';
import { Page } from '@/components/Page.tsx';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <Page>
      <div className="home-page">
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </Page>
  );
};