'use client';

import MarkdownToJSX, { MarkdownToJSX as MarkdownToJSXType } from 'markdown-to-jsx';
import { OverrideAnchorByLink } from './overrides/OverrideAnchorByLink';
import { usePathname } from 'next/navigation';
import { CopyableContent } from '../CopyableContent';
import { OverridePre } from './overrides/OverridePre';
import { OverrideTable } from './overrides/OverrideTable';
import { OverrideIframe } from './overrides/OverrideIframe';

interface Props {
  children: string;
  options?: MarkdownToJSXType.Options;
}

const Markdown = ({ children, options }: Props) => {
  const pathname = usePathname();
  const basePath = typeof window !== 'undefined' ? window.location.origin + pathname : '';

  return (
    <MarkdownToJSX
      className="markdown"
      options={{
        ...options,
        slugify: str => str,
        overrides: {
          a: OverrideAnchorByLink,
          pre: OverridePre,
          table: OverrideTable,
          iframe: OverrideIframe,
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
