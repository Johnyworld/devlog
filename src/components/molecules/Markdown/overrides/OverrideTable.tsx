import { HTMLAttributes } from 'react';

export const OverrideTable = (props: HTMLAttributes<HTMLTableElement>) => {
  return (
    <div className="markdown-table">
      <table {...props} />
    </div>
  );
};
