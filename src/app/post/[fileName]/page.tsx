import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/molecules/Markdown';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import Link from 'next/link';
import { removeExtension } from '@utils/stringUtils';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { EACH_POST_API_END_POINT } from '@utils/constants';
import { getRoute } from '@utils/routes';
import { Main } from '@components/views/layouts/Main';

interface Props {
  params: {
    fileName: string;
  };
}

async function getData(fileName: string) {
  const res = await fetch(`${EACH_POST_API_END_POINT}/${fileName}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const regProperties = /^---([\s\S]*?)---/;

export default async function Page({ params }: Props) {
  const fileName = decodeURI(params.fileName) + '.md';
  const data = await getData(fileName);
  const markdownContent = parseBase64ToString(data.content).replace(regProperties, '');

  return (
    <Main>
      <PageContent>
        <Markdown
          options={{
            overrides: { a: OverrideAnchorByLink },
          }}
        >
          {markdownContent}
        </Markdown>
      </PageContent>
    </Main>
  );
}

const OverrideAnchorByLink = ({
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  if (!props.href) {
    return <Link href='/'>{props.children}</Link>;
  }

  if (/https?:\/\//.test(props.href)) {
    return (
      <Link href={props.href} target='_blank'>
        {props.children}
      </Link>
    );
  }

  return (
    <Link href={removeExtension(getRoute.post() + '/' + props.href)} target={props.target}>
      {props.children}
    </Link>
  );
};
