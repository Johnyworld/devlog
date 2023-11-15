import { HTMLAttributes } from 'react';
import style from './GoToTopButton.module.scss';
import classNames from 'classnames';
import PageContent from '@components/layouts/PageContent';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {}

export const GoToTopButton = ({ ...props }: Props) => {
  return (
    <div className={style.goToTopButton_Positioner}>
      <button {...props} className={classNames(style.goToTopButton, props.className)}>
        <svg width='26' height='26' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M3 8L9 2L15 8' stroke='var(--color-letter)' strokeWidth='1' />
          <path d='M9 2V15.5' stroke='var(--color-letter)' strokeWidth='1' />
        </svg>
      </button>
    </div>
  );
};
