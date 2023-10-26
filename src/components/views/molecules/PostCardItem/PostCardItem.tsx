import Link from 'next/link';
import { Post } from 'type';
import { base } from './PostCardItem.module.scss';

interface Props {
  post: Post;
}

const PostCardItem = ({ post }: Props) => {
  return (
    <Link href={'post/' + post.title}>
      <div className={base}>
        <h3>{post.title}</h3>
        <p>{post.tags}</p>
        <p>{post.path}</p>
      </div>
    </Link>
  );
};

export default PostCardItem;
