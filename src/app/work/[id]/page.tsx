import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/molecules/Markdown';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { EACH_WORK_API_END_POINT } from '@utils/constants';
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

    return (
      <Main>
        <PageContent>{project ? <WorkTitle data={project} /> : <h1>데이터가 없어요</h1>}</PageContent>

        <Divider />

        {data !== null ? (
          <PageContent>
            <Markdown>{parseBase64ToString(data.content)}</Markdown>
          </PageContent>
        ) : (
          <PageContent>내용이 없습니다.</PageContent>
        )}
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
