import { Post } from 'type';
import { formatISODatePart } from '@utils/string';

interface Props {
  post: Post;
}

const PostCardItem = ({ post }: Props) => {
  return (
    <div className="post-card-item rounded px-2.5 py-1.5 -mx-2.5 _clickable">
      <h3 className="text-md whitespace-nowrap _ellipsis">{post.title}</h3>
      <p className="text-sm text-gray mt-0.5">
        {formatISODatePart(post.createdAt)}
        {' · '}
        {post.tags.join(', ')}
      </p>
    </div>
  );
};

export default PostCardItem;
