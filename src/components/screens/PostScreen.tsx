import { useParams } from "react-router-dom";
import PostViewerContainer from "../containers/PostViewerContainer";

const PostScreen = () => {
  const params = useParams();

  if (params.name === undefined) {
    return <p>Error</p>;
  }

  return <PostViewerContainer postName={params.name} />;
};

export default PostScreen;
