import { Post } from 'type';
import { postCardItem, createdAt } from './PostCardItem.module.scss';

interface Props {
  post: Post;
}

const PostCardItem = ({ post }: Props) => {
  return (
    <div className={postCardItem}>
      <h3>{post.title}</h3>
      <p className={createdAt}>{post.createdAt}</p>
    </div>
  );
};

export default PostCardItem;
