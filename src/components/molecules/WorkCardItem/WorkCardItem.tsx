import { formatISODatePart } from '@utils/string';
import style from './WorkCardItem.module.scss';
import classNames from 'classnames';

interface Props {
  workStatus: WorkStatus;
  title: string;
  description?: string;
  thumbnail?: string;
  createdAt?: string;
}

export enum WorkStatus {
  Live = 'LIVE',
  Legacy = 'LEGACY',
}

export const WorkCardItem = ({ workStatus, title, description, thumbnail, createdAt }: Props) => {
  const isLive = workStatus === WorkStatus.Live;
  const statusText = isLive ? '운영중' : '중지됨';
  return (
    <div className={style.workCardItem}>
      <div className={style.workCardItem_thumbnail}>
        <img src={thumbnail} />
        <div className={classNames(style.workCardItem_imageTag, { isLive })}>{statusText}</div>
      </div>
      <h3>{title}</h3>
      {createdAt && <p className={style.workCardItem_meta}>{formatISODatePart(createdAt)}</p>}
      <p className={style.workCardItem_description}>{description}</p>
    </div>
  );
};
