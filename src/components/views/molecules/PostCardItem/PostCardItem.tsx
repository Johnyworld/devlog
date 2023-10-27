import { Post } from 'type';
import style from './PostCardItem.module.scss';

interface Props {
  post: Post;
}

const PostCardItem = ({ post }: Props) => {
  return (
    <div className={style.postCardItem}>
      <h3>{post.title}</h3>
      <p className={style.createdAt}>{post.createdAt}</p>
    </div>
  );
};

export default PostCardItem;
