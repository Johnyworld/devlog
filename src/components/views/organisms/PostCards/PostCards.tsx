import { Post } from 'type';
import PostCardItem from '../../molecules/PostCardItem/PostCardItem';

interface Props {
  posts: Post[];
}

const PostCards = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.title}>
            <PostCardItem post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostCards;
