import { getCategoriesFromPosts } from '@utils/post';
import Link from 'next/link';
import { Post } from 'type';
import style from './Categories.module.scss';
import { getRoute } from '@utils/routes';
import classNames from 'classnames';
import { ALL_CATEGORIES_KEY } from '@utils/constants';

interface Props {
  posts: Post[];
  currentCategory: string;
}

const Categories = ({ posts, currentCategory }: Props) => {
  const categories = getCategoriesFromPosts(posts);

  return (
    <div className={style.categories}>
      <Link
        href={getRoute.root()}
        className={classNames(style.categories_tag, {
          selected: currentCategory === ALL_CATEGORIES_KEY,
        })}
      >
        <span>#전체보기</span>
        <span className={style.categories_count}>{posts.length}</span>
      </Link>

      {Object.entries(categories)
        .sort((a, b) => b[1] - a[1])
        .map(([category, count]) => (
          <Link
            key={category}
            href={getRoute.rootCategoryQueryString(category)}
            className={classNames(style.categories_tag, { selected: currentCategory === category })}
          >
            <span>#{category}</span>
            <span className={style.categories_count}>{count}</span>
          </Link>
        ))}
    </div>
  );
};

export default Categories;
