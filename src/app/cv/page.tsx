import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/molecules/Markdown';
import { CV_FILE_API_END_POINT } from '@utils/constants';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { Main } from '@components/views/layouts/Main';

async function getData() {
  const res = await fetch(CV_FILE_API_END_POINT);
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
