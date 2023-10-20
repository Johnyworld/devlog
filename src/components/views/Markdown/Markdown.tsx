import MarkdownToJSX, { MarkdownToJSX as MarkdownToJSXType } from 'markdown-to-jsx';
import './Markdown.css';
import { base } from './Markdown.css';

interface Props {
  children: string;
  options?: MarkdownToJSXType.Options;
}

const NOT_HEADING = /(#{1,6})([^\s#]+)/g;

const Markdown = ({ children, options }: Props) => {
  return (
    <MarkdownToJSX className={base} options={{ ...options, slugify: str => str }}>
      {children.replace(NOT_HEADING, "<span class='tag'>$2</span>")}
    </MarkdownToJSX>
  );
};

export default Markdown;
