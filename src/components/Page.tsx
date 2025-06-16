import { FC, PropsWithChildren, useEffect } from 'react';
import { backButton } from '@telegram-apps/sdk';
import { Header } from '@/components/Header/Header.tsx';
import { useNavigate } from 'react-router-dom';

interface PageProps extends PropsWithChildren {
  back?: boolean;
}

export const Page: FC<PageProps> = ({ children, back = true }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (back && backButton.show.isAvailable()) {
      backButton.show();
      return backButton.onClick(() => {
        navigate(-1);
      });
    } else if (backButton.hide.isAvailable()) {
      backButton.hide();
    }
  }, [back]);

  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
};