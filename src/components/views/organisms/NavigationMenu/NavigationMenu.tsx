import { NavigationMenuItem } from '../NavigationMenuItem';
import style from './NavigationMenu.module.scss';

interface NavigationMenu {
  id: string;
  title: string;
  href: string;
}

interface Props {
  data: NavigationMenu[];
  currentMenu: string;
}

export const NavigationMenu = ({ data, currentMenu }: Props) => {
  return (
    <nav className={style.navigationMenu}>
      <ul>
        {data.map(item => (
          <NavigationMenuItem key={item.id} title={item.title} href={item.href} selected={currentMenu === item.id} />
        ))}
      </ul>
    </nav>
  );
};
