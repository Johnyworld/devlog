'use client';

import { ALL_CATEGORIES_KEY } from '../../../../utils/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  categories: string[];
}

const Categories = ({ categories }: Props) => {
  const pathname = usePathname();
  return (
    <ul>
      <li key={ALL_CATEGORIES_KEY}>
        <Link href={`${pathname}?c=${ALL_CATEGORIES_KEY}`}>All</Link>
      </li>
      {categories.map(category => (
        <li key={category}>
          <Link href={`${pathname}?c=${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
