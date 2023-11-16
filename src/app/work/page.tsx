import { Main } from '@components/layouts/Main';
import PageContent from '@components/layouts/PageContent';
import { WorkList } from '@components/organisms/WorkList';
import { Metadata } from 'next';
import { getProjects } from 'src/calls/getProjects';
import { getToyProjects } from 'src/calls/getToyProjects';

export default function Page() {
  const projects = getProjects();
  const toyProjects = getToyProjects();

  return (
    <Main>
      <PageContent>
        <WorkList title="Projects" works={projects} />
      </PageContent>

      <PageContent style={{ marginTop: 80 }}>
        <WorkList title="Toy projects" works={toyProjects} />
      </PageContent>
    </Main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Johny Kim: Work';
  return {
    title,
    openGraph: {
      title,
    },
  };
}
