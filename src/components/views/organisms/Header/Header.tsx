'use client';

import { usePathname } from 'next/navigation';
import PageContent from '@components/views/layouts/PageContent';
import { getRoute } from '@utils/routes';
import { NavigationMenu } from '../NavigationMenu';
import { base } from './Header.module.scss';

export const Header = () => {
  const pathname = usePathname();
  const currentMenu = pathname.split('/')[1];

  return (
    <header className={base}>
      <PageContent>
        <NavigationMenu
          currentMenu={currentMenu || 'blog'}
          data={[
            { id: 'blog', title: 'BLOG', href: getRoute.root() },
            { id: 'work', title: 'WORK', href: getRoute.work() },
            { id: 'cv', title: 'CV', href: getRoute.cv() },
          ]}
        />
      </PageContent>
    </header>
  );
};
