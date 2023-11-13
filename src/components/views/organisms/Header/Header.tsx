'use client';

import { usePathname } from 'next/navigation';
import PageContent from '@components/views/layouts/PageContent';
import { getRoute } from '@utils/routes';
import { NavigationMenu } from '../NavigationMenu';
import style from './Header.module.scss';
import { ThemeToggle } from '@components/containers/ThemeToggleButton';

export const Header = () => {
  const pathname = usePathname();
  const currentMenu = pathname.split('/')[1];

  return (
    <header className={style.header}>
      <PageContent>
        <div className={style.header_container}>
          <nav>
            <NavigationMenu
              currentMenu={currentMenu || 'post'}
              data={[
                { id: 'post', title: 'BLOG', href: getRoute.root() },
                { id: 'work', title: 'WORK', href: getRoute.work() },
                { id: 'cv', title: 'CV', href: getRoute.cv() },
              ]}
            />
          </nav>
          <ThemeToggle />
        </div>
      </PageContent>
    </header>
  );
};
