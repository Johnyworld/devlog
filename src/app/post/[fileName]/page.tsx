import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/Markdown';
import { promises as fs } from 'fs';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import Link from 'next/link';
import { removeExtension } from '@utils/stringUtils';

interface Props {
  params: {
    fileName: string;
  };
}

async function getData(fileName: string) {
  const file = await fs.readFile(process.cwd() + `/src/vault/tech/${fileName}.md`, 'utf-8');
  return file;
}

export default async function Page({ params }: Props) {
  const fileName = decodeURI(params.fileName);
  const data = await getData(fileName);
  return (
    <main>
      <PageContent>
        <Markdown
          options={{
            overrides: { a: OverrideAnchorByLink },
          }}
        >
          {data}
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
