import { getRoute } from '@utils/routes';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  name: string;
  count: number;
  isSelected: boolean;
}

export const CategoryItem = ({ name, count, isSelected }: Props) => {
  return (
    <Link
      href={getRoute.rootCategoryQueryString(name)}
      className={classNames('text-sm text-primary flex items-center gap-px', {
        'font-bold': isSelected,
      })}
    >
      <span>#{name}</span>
      <span className="text-xs text-gray">{count}</span>
    </Link>
  );
};
