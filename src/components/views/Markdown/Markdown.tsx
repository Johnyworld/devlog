import MarkdownToJSX, {
  MarkdownToJSX as MarkdownToJSXType
} from "markdown-to-jsx";

interface Props {
  children: string;
  options?: MarkdownToJSXType.Options;
}

const Markdown = ({ children, options }: Props) => {
  return (
    <MarkdownToJSX
      className="markdown"
      options={{ ...options, slugify: (str) => str }}>
      {children}
    </MarkdownToJSX>
  );
};

export default Markdown;
