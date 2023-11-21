import classNames from 'classnames';

interface Props {
  name: string;
  count: number;
  isSelected: boolean;
}

export const CategoryItem = ({ name, count, isSelected }: Props) => {
  return (
    <div
      className={classNames('text-sm text-primary flex items-center gap-px', {
        [isSelected ? 'font-bold' : 'opacity-80']: true,
      })}
    >
      <span>#{name}</span>
      <span className="text-xs text-gray">{count}</span>
    </div>
  );
};
