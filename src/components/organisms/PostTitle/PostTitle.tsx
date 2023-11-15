import { ISODatePart } from 'type';
import style from './PostTitle.module.scss';
import { formatISODatePart } from '@utils/string';
import Link from 'next/link';
import { getRoute } from '@utils/routes';

interface Props {
  title: string;
  createdAt: ISODatePart;
  tags: string[];
}

export const PostTitle = ({ title, createdAt, tags }: Props) => {
  return (
    <div className={style.postTitle}>
      <h1 className={style.postTitle_title}>{title}</h1>
      <p className={style.postTitle_description}>
        {formatISODatePart(createdAt)}
        {' · '}
        {tags.map(tag => (
          <Link className={style.postTitle_tag} href={getRoute.rootCategoryQueryString(tag)}>
            {`#${tag}`}
          </Link>
        ))}
      </p>
    </div>
  );
};
