import PageContent from '@components/views/layouts/PageContent';
import Markdown from '@components/views/molecules/Markdown';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { EACH_POST_API_END_POINT } from '@utils/constants';
import { Main } from '@components/views/layouts/Main';
import { Divider } from '@components/views/atoms/Divider';
import { PostTitle } from '@components/views/organisms/PostTitle';
import { NotFound } from '@components/views/organisms/NotFound';

interface Props {
  params: {
    fileName: string;
  };
}

async function getData(fileName: string) {
  const res = await fetch(`${EACH_POST_API_END_POINT}/${fileName}`, {
    headers: { Authorization: process.env.NEXT_PUBLIC_GITHUB_AUTH ?? '' },
  });
  if (!res.ok) {
    throw new Error('Post 데이터를 불러오는데 실패했습니다.');
  }
  return res.json();
}

const regProperties = /^---([\s\S]*?)---/;
const regCreatedAt = /(?<=Created: ("|))([\d]{4}-[\d]{2}-[\d]{2})/;
const regTags = /(?<=- )([\s\S]*?)(?=\n)/g;

export default async function Page({ params }: Props) {
  try {
    const postTitle = decodeURIComponent(params.fileName);
    const fileName = postTitle + '.md';
    const data = await getData(fileName);
    const markdownContent = parseBase64ToString(data.content);
    const content = markdownContent.replace(regProperties, '');
    const properties = getProperties(markdownContent);

    return (
      <Main>
        <PageContent>
          <PostTitle title={postTitle} createdAt={properties?.createdAt ?? ''} tags={properties?.tags ?? []} />
        </PageContent>

        <Divider />

        <PageContent>
          <Markdown>{content}</Markdown>
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

const getProperties = (fileContent: string) => {
  const propertiesPart = fileContent.match(regProperties)?.[0];
  const createdAt = propertiesPart?.match(regCreatedAt)?.[0];
  const tags = propertiesPart?.match(regTags) || [];
  if (!createdAt) {
    return null;
  }
  return {
    createdAt,
    tags,
  };
};
