import useGetPost from "../../hooks/useGetPost";
import { removeExtension } from "../../utils/stringUtils";
import Markdown from "../views/Markdown";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { Link } from "react-router-dom";

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

  return (
    <Markdown
      options={{
        overrides: { a: OverrideAnchorByLink }
      }}>
      {data}
    </Markdown>
  );
};

const OverrideAnchorByLink = ({
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <Link
      to={props.href != null ? removeExtension("/archive/" + props.href) : "/"}
      target={props.target}>
      {props.children}
    </Link>
  );
};

export default PostViewerContainer;
