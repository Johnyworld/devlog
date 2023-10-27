import { Post } from 'type';
import PostCardItem from '../../molecules/PostCardItem/PostCardItem';
import Link from 'next/link';
import { postCards } from './PostCards.module.scss';

interface Props {
  posts: Post[];
}

const PostCards = ({ posts }: Props) => {
  return (
    <ul className={postCards}>
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
