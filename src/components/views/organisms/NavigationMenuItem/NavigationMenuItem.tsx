import Link from 'next/link';
import { ComponentProps } from 'react';
import { base } from './NavigationMenuItem.module.scss';

interface Props extends ComponentProps<typeof Link> {
  title: string;
  selected: boolean;
}

export const NavigationMenuItem = ({ title, selected, ...linkProps }: Props) => {
  return (
    <li className={base}>
      <Link {...linkProps}>{title}</Link>
    </li>
  );
};
