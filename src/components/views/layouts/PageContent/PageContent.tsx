import { ReactNode } from 'react';
import { base } from './PageContent.module.scss';

interface Props {
  children: ReactNode;
}

const PageContent = ({ children }: Props) => {
  return <section className={base}>{children}</section>;
};

export default PageContent;
