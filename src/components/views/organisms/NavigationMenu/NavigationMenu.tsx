import { base } from './NavigationMenu.css';
import { NavigationMenuItem } from '../NavigationMenuItem';

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
    <nav>
      <ul className={base}>
        {data.map(item => (
          <NavigationMenuItem key={item.id} title={item.title} href={item.href} selected={currentMenu === item.id} />
        ))}
      </ul>
    </nav>
  );
};
