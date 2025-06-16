import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { LeadersPage } from '@/pages/LeadersPage/LeadersPage';
import { FriendsPage } from '@/pages/FriendsPage/FriendsPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
  showInToolbar?: boolean;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/home', Component: HomePage, title: 'Home', showInToolbar: true },
  { path: '/leaders', Component: LeadersPage, title: 'Leaders', showInToolbar: true },
  { path: '/friends', Component: FriendsPage, title: 'Friends', showInToolbar: true }
];

export const getToolbarRoutes = () => routes.filter(route => route.showInToolbar);
