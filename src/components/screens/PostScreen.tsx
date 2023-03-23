import { useParams } from "react-router-dom";
import PostViewerContainer from "../containers/PostViewerContainer";

const PostScreen = () => {
  const params = useParams();

  if (params.name === undefined) {
    return <p>Error</p>;
  }

  return (
    <div style={{ width: "720px", margin: "0 auto" }}>
      <PostViewerContainer postName={params.name} />
    </div>
  );
};

export default PostScreen;
