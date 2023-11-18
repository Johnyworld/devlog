import { Work } from 'type';
import { formatISODatePart } from '@utils/string';
import Link from 'next/link';
import classNames from 'classnames';

interface Props {
  data: Work;
}

export const WorkTitle = ({ data }: Props) => {
  const { title, createdAt, description, href, github } = data;

  return (
    <div className={classNames('work-title', '_stack-16')}>
      <div>
        <h1>{title}</h1>
        {createdAt && <p className="text-sm text-gray mt-1">{formatISODatePart(createdAt)}</p>}
      </div>

      {description && <p className="leading-140">{description}</p>}

      {(href || github) && (
        <div className="text-sm _stack-1.5">
          {href && (
            <div>
              <strong>방문하기</strong>
              <span> · </span>
              <Link href={href} target="_blank" className="text-primary">
                {href}
              </Link>
            </div>
          )}
          {github && (
            <div>
              <strong>깃헙</strong>
              <span> · </span>
              <Link href={github} target="_blank" className="text-primary">
                {github}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
