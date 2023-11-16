import { Work } from 'type';
import style from './WorkTitle.module.scss';
import { formatISODatePart } from '@utils/string';
import Link from 'next/link';

interface Props {
  data: Work;
}

export const WorkTitle = ({ data }: Props) => {
  const { title, createdAt, description, href, github } = data;

  return (
    <div className={style.workTitle}>
      <div>
        <h1>{title}</h1>
        {createdAt && <p className={style.workTitle_createdAt}>{formatISODatePart(createdAt)}</p>}
      </div>

      {description && <p className={style.workTitle_description}>{description}</p>}

      {(href || github) && (
        <div>
          {href && (
            <div className={style.workTitle_link}>
              <strong>방문하기</strong>
              <span> · </span>
              <Link href={href} target="_blank">
                {href}
              </Link>
            </div>
          )}
          {github && (
            <div className={style.workTitle_link}>
              <strong>깃헙</strong>
              <span> · </span>
              <Link href={github} target="_blank">
                {github}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
