import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/Markdown';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import Link from 'next/link';
import { removeExtension } from '@utils/stringUtils';
import { parseBase64ToString } from '@utils/parseBase64ToString';

interface Props {
  params: {
    fileName: string;
  };
}

async function getData(fileName: string) {
  const res = await fetch(`https://api.github.com/repos/johnyworld/dev-archive/contents/vault/tech/${fileName}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page({ params }: Props) {
  const fileName = decodeURI(params.fileName) + '.md';
  const data = await getData(fileName);
  const markdownContent = parseBase64ToString(data.content);

  return (
    <main>
      <PageContent>
        <Markdown
          options={{
            overrides: { a: OverrideAnchorByLink },
          }}
        >
          {markdownContent}
        </Markdown>
      </PageContent>
    </main>
  );
}

const OverrideAnchorByLink = ({
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  return (
    <Link href={props.href != null ? removeExtension('/archive/' + props.href) : '/'} target={props.target}>
      {props.children}
    </Link>
  );
};
