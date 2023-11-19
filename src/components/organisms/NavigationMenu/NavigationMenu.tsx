import Link from 'next/link';
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
    <ul className="navigation-menu flex items-center gap-1 -mx-2">
      {data.map(item => (
        <li key={item.id}>
          <Link href={item.href}>
            <NavigationMenuItem title={item.title} selected={currentMenu === item.id} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
