import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/molecules/Markdown';
import { CV_FILE_API_END_POINT } from '@utils/constants';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { Main } from '@components/views/layouts/Main';
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
      <div>
        <PageContent>
          <Markdown>{markdownContent}</Markdown>
        </PageContent>
      </div>
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
