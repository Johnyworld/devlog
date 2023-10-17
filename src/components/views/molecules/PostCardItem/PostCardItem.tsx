import { Link } from "react-router-dom";
import { Post } from "type";
import "./PostCardItem.css";

interface Props {
  post: Post;
}

const PostCardItem = ({ post }: Props) => {
  return (
    <Link to={post.path.replace(".md", "")}>
      <div className="post-card-item">
        <h3>{post.title}</h3>
        <p>{post.tags}</p>
        <p>{post.path}</p>
      </div>
    </Link>
  );
};

export default PostCardItem;