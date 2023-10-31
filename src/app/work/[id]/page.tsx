import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/molecules/Markdown';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import Link from 'next/link';
import { removeExtension } from '@utils/stringUtils';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { EACH_WORK_API_END_POINT } from '@utils/constants';
import { getRoute } from '@utils/routes';
import { Main } from '@components/views/layouts/Main';
import { Divider } from '@components/views/atoms/Divider';
import { WorkTitle } from '@components/views/organisms/WorkTitle';
import { NotFound } from '@components/views/organisms/NotFound';
import { getProjects } from 'src/calls/getProjects';
import { getToyProjects } from 'src/calls/getToyProjects';

interface Props {
  params: {
    id: string;
  };
}

async function getData(fileName: string) {
  const res = await fetch(`${EACH_WORK_API_END_POINT}/${fileName}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function Page({ params }: Props) {
  const id = decodeURI(params.id);
  const fileName = id + '.md';
  const data = await getData(fileName);
  const projects = getProjects();
  const toyProjects = getToyProjects();
  const project = [...projects, ...toyProjects].find(work => work.id === id);

  if (!project) {
    return (
      <Main>
        <PageContent>
          <NotFound />
        </PageContent>
      </Main>
    );
  }

  return (
    <Main>
      <PageContent>{project ? <WorkTitle data={project} /> : <h1>데이터가 없어요</h1>}</PageContent>

      <Divider />

      {data !== null ? (
        <PageContent>
          <Markdown
            options={{
              overrides: { a: OverrideAnchorByLink },
            }}
          >
            {parseBase64ToString(data.content)}
          </Markdown>
        </PageContent>
      ) : (
        <PageContent>내용이 없습니다.</PageContent>
      )}
    </Main>
  );
}

const OverrideAnchorByLink = ({
  ...props
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  console.log(props.href);
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
