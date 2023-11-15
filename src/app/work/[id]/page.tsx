import PageContent from '@components/layouts/PageContent';
import Markdown from '@components/molecules/Markdown';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { EACH_WORK_API_END_POINT } from '@utils/constants';
import { Main } from '@components/layouts/Main';
import { Divider } from '@components/atoms/Divider';
import { WorkTitle } from '@components/organisms/WorkTitle';
import { NotFound } from '@components/organisms/NotFound';
import { getProjects } from 'src/calls/getProjects';
import { getToyProjects } from 'src/calls/getToyProjects';
import { MarkdownTOC } from '@components/molecules/MarkdownTOC';
import { Metadata, ResolvingMetadata } from 'next';
import { PostComment } from '@containers/PostComment';

interface Props {
  params: {
    id: string;
  };
}

async function getData(fileName: string) {
  const res = await fetch(`${EACH_WORK_API_END_POINT}/${fileName}`, {
    headers: { Authorization: process.env.NEXT_PUBLIC_GITHUB_AUTH ?? '' },
  });
  if (!res.ok) {
    throw new Error('Work 데이터를 불러오는데 실패했습니다.');
  }
  return res.json();
}

export default async function Page({ params }: Props) {
  try {
    const id = decodeURI(params.id);
    const fileName = id + '.md';
    const data = await getData(fileName);
    const projects = getProjects();
    const toyProjects = getToyProjects();
    const project = [...projects, ...toyProjects].find(work => work.id === id);
    const markdownContent = parseBase64ToString(data.content);

    return (
      <Main>
        <PageContent>{project ? <WorkTitle data={project} /> : <h1>데이터가 없어요</h1>}</PageContent>

        <Divider />

        {data !== null ? (
          <PageContent>
            <MarkdownTOC content={markdownContent} style={{ marginBottom: 60 }} />
            <Markdown>{markdownContent}</Markdown>
          </PageContent>
        ) : (
          <PageContent>내용이 없습니다.</PageContent>
        )}

        <PageContent>
          <PostComment />
        </PageContent>
      </Main>
    );
  } catch {
    return (
      <Main>
        <PageContent>
          <NotFound />
        </PageContent>
      </Main>
    );
  }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = decodeURI(params.id);
  const projects = getProjects();
  const toyProjects = getToyProjects();
  const project = [...projects, ...toyProjects].find(work => work.id === id);

  return {
    title: project?.title ?? 'Johny Kim',
    openGraph: {
      title: id,
    },
  };
}
