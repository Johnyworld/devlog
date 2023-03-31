import MarkdownToJSX from "markdown-to-jsx";

interface Props {
  children: string;
}

const Markdown = ({ children }: Props) => {
  return <MarkdownToJSX className="markdown">{children}</MarkdownToJSX>;
};

export default Markdown;
