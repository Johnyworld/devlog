'use client';

import { HTMLAttributes } from 'react';
import styles from './ThemeToggleButton.module.scss';
import classNames from 'classnames';
import { Theme } from 'type';
import { NoSSRRendering } from '@utils/NoSSRRendering';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  theme: Theme | null;
  onClick: () => void;
}

export const ThemeToggleButton = ({ theme, onClick, className, ...props }: Props) => {
  return (
    <NoSSRRendering>
      <div {...props} className={classNames(styles.themeToggleButton, className)}>
        <button onClick={onClick}>{theme === 'light' ? '🌞' : '🌜'}</button>
      </div>
    </NoSSRRendering>
  );
};
