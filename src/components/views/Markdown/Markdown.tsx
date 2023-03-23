import ReactMarkdown from "react-markdown";

interface Props {
  children: string;
}

const Markdown = ({ children }: Props) => {
  return <ReactMarkdown className="markdown">{children}</ReactMarkdown>;
};

export default Markdown;
