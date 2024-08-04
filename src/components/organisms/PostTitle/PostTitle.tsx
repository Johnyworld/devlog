import { ISODatePart } from 'type';
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
    <div className="post-title">
      <h1 className="mb-2">{title}</h1>
      <p className="text-sm text-gray space-x-1">
        {formatISODatePart(createdAt)}
        {' · '}
        {tags.map(tag => (
          <Link className="text-primary" href={getRoute.rootCategoryQueryString(tag)}>
            {`#${tag}`}
          </Link>
        ))}
      </p>
    </div>
  );
};
