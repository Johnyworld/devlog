import MarkdownToJSX, { MarkdownToJSX as MarkdownToJSXType } from 'markdown-to-jsx';
import style from './Markdown.module.scss';
import { OverrideAnchorByLink } from './overrides/OverrideAnchorByLink';

interface Props {
  children: string;
  options?: MarkdownToJSXType.Options;
}

const Markdown = ({ children, options }: Props) => {
  return (
    <MarkdownToJSX
      className={style.markdown}
      options={{ ...options, slugify: str => str, overrides: { a: OverrideAnchorByLink } }}
    >
      {children}
    </MarkdownToJSX>
  );
};

export default Markdown;
