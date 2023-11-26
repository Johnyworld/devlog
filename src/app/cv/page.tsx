import PageContent from '@components/layouts/PageContent';
import Markdown from '@components/molecules/Markdown';
import { CV_FILE_API_END_POINT } from '@utils/constants';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { Main } from '@components/layouts/Main';
import { Metadata } from 'next';

async function getData() {
  const res = await fetch(CV_FILE_API_END_POINT, {
    headers: { Authorization: process.env.NEXT_PUBLIC_GITHUB_AUTH ?? '' },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  const markdownContent = parseBase64ToString(data.content);

  return (
    <Main>
      <PageContent>
        <Markdown className="cv">{markdownContent}</Markdown>
      </PageContent>
    </Main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Johny Kim: Curriculum Vitae';
  return {
    title,
    openGraph: {
      title,
    },
  };
}
