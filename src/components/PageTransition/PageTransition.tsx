import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

export const PageTransition: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const prevPathRef = useRef<string>(location.pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (prevPathRef.current !== location.pathname && containerRef.current) {
      containerRef.current.classList.add('page-transition--animating');
      
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.classList.remove('page-transition--animating');
        }
        prevPathRef.current = location.pathname;
      }, 300); // Match this with CSS animation duration
      
      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);
  
  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
};