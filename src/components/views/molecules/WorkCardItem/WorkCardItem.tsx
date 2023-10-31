import { formatISODatePart } from '@utils/string';
import style from './WorkCardItem.module.scss';

interface Props {
  title: string;
  description?: string;
  thumbnail?: string;
  createdAt?: string;
}

export const WorkCardItem = ({ title, description, thumbnail, createdAt }: Props) => {
  return (
    <div className={style.workCardItem}>
      <img className={style.workCardItem_thumbnail} src={thumbnail} />
      <h3>{title}</h3>
      {createdAt && <p className={style.workCardItem_meta}>{formatISODatePart(createdAt)}</p>}
      <p className={style.workCardItem_description}>{description}</p>
    </div>
  );
};
