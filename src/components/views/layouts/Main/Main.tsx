import { HTMLAttributes } from 'react';
import { main } from './Main.module.scss';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Main = ({ children }: Props) => {
  return <main className={main}>{children}</main>;
};
