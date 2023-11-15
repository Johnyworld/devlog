import { HTMLAttributes } from 'react';
import style from '../Markdown.module.scss';

export const OverrideTable = (props: HTMLAttributes<HTMLTableElement>) => {
  return (
    <div className={style.overrideTable}>
      <table {...props} />
    </div>
  );
};
