import { useMemo } from 'react';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import { miniApp, retrieveLaunchParams } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { routes } from '@/navigation/routes.tsx';
import { Toolbar } from '@/components/Toolbar/Toolbar.tsx';
import { PageTransition } from '@/components/PageTransition/PageTransition.tsx';
import './App.css';

export function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);

  miniApp.setBackgroundColor('#000000');
  miniApp.setHeaderColor('#000000');

  return (
    <AppRoot
      appearance="dark"
      platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <div className="app-container">
          <PageTransition>
            <Routes>
              {routes.map((route) => <Route key={route.path} {...route} />)}
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </PageTransition>
          <Toolbar />
        </div>
      </HashRouter>
    </AppRoot>
  );
}