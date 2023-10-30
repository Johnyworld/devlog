import { Post } from 'type';
import style from './PostCardItem.module.scss';
import { formatISODatePart } from '@utils/string';

interface Props {
  post: Post;
}

const PostCardItem = ({ post }: Props) => {
  return (
    <div className={style.postCardItem}>
      <h3 className={style.postCardItem_title}>{post.title}</h3>
      <p className={style.postCardItem_createdAt}>{formatISODatePart(post.createdAt)}</p>
    </div>
  );
};

export default PostCardItem;
