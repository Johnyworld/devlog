import { HTMLAttributes } from 'react';
import { base } from './Main.css';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Main = ({ children }: Props) => {
  return <div className={base}>{children}</div>;
};
