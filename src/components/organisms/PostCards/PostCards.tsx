import { Post } from 'type';
import PostCardItem from '../../molecules/PostCardItem/PostCardItem';
import Link from 'next/link';

interface Props {
  posts: Post[];
}

const PostCards = ({ posts }: Props) => {
  return (
    <ul className="post-cards _stack-1">
      {posts.map(post => {
        return (
          <li key={post.title}>
            <Link href={'post/' + post.title}>
              <PostCardItem post={post} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostCards;
