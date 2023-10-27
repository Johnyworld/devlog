import { Post } from 'type';
import format from 'date-fns/format';
import style from './PostCardItem.module.scss';

interface Props {
  post: Post;
}

const PostCardItem = ({ post }: Props) => {
  return (
    <div className={style.postCardItem}>
      <h3 className={style.title}>{post.title}</h3>
      <p className={style.createdAt}>{format(new Date(post.createdAt), 'y. M. d.')}</p>
    </div>
  );
};

export default PostCardItem;
