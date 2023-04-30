import { useParams } from "react-router-dom";
import PostViewerContainer from "../containers/PostViewerContainer";
import PageContent from "../views/layouts/PageContent/PageContent";

const PostScreen = () => {
  const params = useParams();

  if (params.name === undefined) {
    return <p>Error</p>;
  }

  return (
    <main className="post-screen">
      <PageContent>
        <PostViewerContainer postName={params.name} />
      </PageContent>
    </main>
  );
};

export default PostScreen;
