import { ISODatePart } from 'type';
import style from './PostTitle.module.scss';
import { formatISODatePart } from '@utils/string';

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
        {tags.map(tag => `#${tag}`).join(', ')}
      </p>
    </div>
  );
};
