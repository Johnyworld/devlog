import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Main = ({ children }: Props) => {
  return <main className="main mt-12 mb-20 sm:mt-20 sm:mb-30">{children}</main>;
};
