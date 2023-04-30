import { Post } from "type";
import PostCardItem from "../../molecules/PostCardItem/PostCardItem";
import "./PostCards.css";

interface Props {
  posts: Post[];
}

const PostCards = ({ posts }: Props) => {
  return (
    <ul className="post-cards">
      {posts.map((post) => {
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
