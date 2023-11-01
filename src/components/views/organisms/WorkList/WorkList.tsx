import { WorkCardItem, WorkStatus } from '@components/views/molecules/WorkCardItem';
import Link from 'next/link';
import { Work } from 'type';
import style from './WorkList.module.scss';
import { getRoute } from '@utils/routes';

interface Props {
  title?: string;
  works: Work[];
}

export const WorkList = ({ title, works }: Props) => {
  return (
    <div className={style.workList}>
      {title && <h2 className={style.workList_title}>{title}</h2>}
      <div className={style.workList_grid}>
        {works.map(work => {
          const { href, hasOwnPage, ...workProps } = work;
          const hasHref = href !== undefined;
          const workStatus = hasHref ? WorkStatus.Live : WorkStatus.Legacy;
          if (hasOwnPage) {
            return (
              <Link href={`${getRoute.work()}/${work.id}`}>
                <WorkCardItem {...workProps} workStatus={workStatus} />
              </Link>
            );
          }
          if (href) {
            return (
              <Link href={href} target='_blank'>
                <WorkCardItem {...workProps} workStatus={workStatus} />
              </Link>
            );
          }
          return <WorkCardItem {...workProps} workStatus={workStatus} />;
        })}
      </div>
    </div>
  );
};
