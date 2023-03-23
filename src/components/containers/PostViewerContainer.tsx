import useGetPost from "../../hooks/useGetPost";

interface Props {
  postName: string;
}

const PostViewerContainer = ({ postName }: Props) => {
  const { data, loading } = useGetPost({ postName });

  if (loading) {
    return <div>loading...</div>;
  }

  return <div style={{ whiteSpace: "pre" }}>{data}</div>;
};

export default PostViewerContainer;
