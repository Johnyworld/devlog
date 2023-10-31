import { HTMLAttributes, ReactNode } from 'react';
import style from './PageContent.module.scss';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PageContent = ({ children, ...restProps }: Props) => {
  return (
    <section {...restProps} className={classNames(style.pageContent, restProps.className)}>
      {children}
    </section>
  );
};

export default PageContent;
