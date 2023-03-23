import useGetPost from "../../hooks/useGetPost";
import Markdown from "../views/Markdown";

interface Props {
  postName: string;
}

const PostViewerContainer = ({ postName }: Props) => {
  const { data, loading } = useGetPost({ postName });

  if (loading) {
    return <div>loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return <Markdown>{data}</Markdown>;
};

export default PostViewerContainer;
