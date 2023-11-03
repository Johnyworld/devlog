'use client';

import MarkdownToJSX, { MarkdownToJSX as MarkdownToJSXType } from 'markdown-to-jsx';
import style from './Markdown.module.scss';
import { OverrideAnchorByLink } from './overrides/OverrideAnchorByLink';
import { usePathname } from 'next/navigation';
import { CopyableContent } from '../CopyableContent';

interface Props {
  children: string;
  options?: MarkdownToJSXType.Options;
}

const Markdown = ({ children, options }: Props) => {
  const pathname = usePathname();
  const basePath = window.location.origin + pathname;

  return (
    <MarkdownToJSX
      className={style.markdown}
      options={{
        ...options,
        slugify: str => str,
        overrides: {
          a: OverrideAnchorByLink,
          h1: props => (
            <h1 {...props}>
              <CopyableContent text={basePath + `#${props.id}`}>{props.children}</CopyableContent>
            </h1>
          ),
          h2: props => (
            <h2 {...props}>
              <CopyableContent text={basePath + `#${props.id}`}>{props.children}</CopyableContent>
            </h2>
          ),
          h3: props => (
            <h3 {...props}>
              <CopyableContent text={basePath + `#${props.id}`}>{props.children}</CopyableContent>
            </h3>
          ),
        },
      }}
    >
      {children}
    </MarkdownToJSX>
  );
};

export default Markdown;
