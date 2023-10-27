import { ReactNode } from 'react';
import style from './PageContent.module.scss';

interface Props {
  children: ReactNode;
}

const PageContent = ({ children }: Props) => {
  return <section className={style.pageContent}>{children}</section>;
};

export default PageContent;
