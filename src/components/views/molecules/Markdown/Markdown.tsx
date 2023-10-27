import MarkdownToJSX, { MarkdownToJSX as MarkdownToJSXType } from 'markdown-to-jsx';
import style from './Markdown.module.scss';

interface Props {
  children: string;
  options?: MarkdownToJSXType.Options;
}

const Markdown = ({ children, options }: Props) => {
  return (
    <MarkdownToJSX className={style.markdown} options={{ ...options, slugify: str => str }}>
      {children}
    </MarkdownToJSX>
  );
};

export default Markdown;
