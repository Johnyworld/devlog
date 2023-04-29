import { useParams } from "react-router-dom";
import PostViewerContainer from "../containers/PostViewerContainer";
import Center from "../views/layouts/Center/Center";

const PostScreen = () => {
  const params = useParams();

  if (params.name === undefined) {
    return <p>Error</p>;
  }

  return (
    <Center>
      <PostViewerContainer postName={params.name} />
    </Center>
  );
};

export default PostScreen;
