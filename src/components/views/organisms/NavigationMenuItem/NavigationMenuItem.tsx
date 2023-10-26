import Link from 'next/link';
import { ComponentProps } from 'react';
import cx from 'classnames';
import { navigationMenuItem } from './NavigationMenuItem.module.scss';

interface Props extends ComponentProps<typeof Link> {
  title: string;
  selected: boolean;
}

export const NavigationMenuItem = ({ title, selected, ...linkProps }: Props) => {
  return (
    <li className={cx(navigationMenuItem, { selected })}>
      <Link {...linkProps}>{title}</Link>
    </li>
  );
};
