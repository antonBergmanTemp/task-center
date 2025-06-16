import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { bem } from '@/css/bem.ts';
import './Toolbar.css';

const [b, e] = bem('toolbar');

export const Toolbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={b()}>
      <div 
        className={e('item', { active: currentPath === '/leaders' })}
        onClick={() => navigate('/leaders')}
      >
        <div className={e('icon', 'leaders')} />
        <span className={e('label')}>Leaders</span>
      </div>
      
      <div 
        className={e('item', { active: currentPath === '/home' })}
        onClick={() => navigate('/home')}
      >
        <div className={e('icon', 'home')} />
        <span className={e('label')}>Home</span>
      </div>
      
      <div 
        className={e('item', { active: currentPath === '/friends' })}
        onClick={() => navigate('/friends')}
      >
        <div className={e('icon', 'friends')} />
        <span className={e('label')}>Friends</span>
      </div>
    </div>
  );
};