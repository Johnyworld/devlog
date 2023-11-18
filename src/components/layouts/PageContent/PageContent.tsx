import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PageContent = ({ children, ...restProps }: Props) => {
  return (
    <section
      {...restProps}
      className={classNames(
        'page-content relative max-w-pageWidth px-pageMargin mx-auto print:max-w-8/10',
        restProps.className,
      )}
    >
      {children}
    </section>
  );
};

export default PageContent;
