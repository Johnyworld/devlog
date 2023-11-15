import { HTMLAttributes } from 'react';
import style from './Main.module.scss';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Main = ({ children }: Props) => {
  return <main className={style.main}>{children}</main>;
};
