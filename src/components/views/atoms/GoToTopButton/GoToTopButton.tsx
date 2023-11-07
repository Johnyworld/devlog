import { HTMLAttributes } from 'react';
import style from './GoToTopButton.module.scss';
import classNames from 'classnames';
import PageContent from '@components/views/layouts/PageContent';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {}

export const GoToTopButton = ({ ...props }: Props) => {
  return (
    <PageContent className={style.goToTopButton_Positioner}>
      <button {...props} className={classNames(style.goToTopButton, props.className)}>
        <svg width='22' height='22' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M3 8L9 2L15 8' stroke='var(--color-gray-strong)' stroke-width='1' />
          <path d='M9 2V15.5' stroke='var(--color-gray-strong)' stroke-width='1' />
        </svg>
      </button>
    </PageContent>
  );
};
