import { ReactNode } from 'react';
import { pageContent } from './PageContent.module.scss';

interface Props {
  children: ReactNode;
}

const PageContent = ({ children }: Props) => {
  return <section className={pageContent}>{children}</section>;
};

export default PageContent;
