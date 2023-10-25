import { mergeCSS } from '@utils/style';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { base, selected as selectedCSS } from './NavigationMenuItem.css';

interface Props extends ComponentProps<typeof Link> {
  title: string;
  selected: boolean;
}

export const NavigationMenuItem = ({ title, selected, ...linkProps }: Props) => {
  return (
    <li className={mergeCSS(base, [selected, selectedCSS])}>
      <Link {...linkProps}>{title}</Link>
    </li>
  );
};
