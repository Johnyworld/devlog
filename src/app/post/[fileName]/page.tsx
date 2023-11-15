import PageContent from '@components/layouts/PageContent';
import Markdown from '@components/molecules/Markdown';
import { parseBase64ToString } from '@utils/parseBase64ToString';
import { EACH_POST_API_END_POINT } from '@utils/constants';
import { Main } from '@components/layouts/Main';
import { Divider } from '@components/atoms/Divider';
import { PostTitle } from '@components/organisms/PostTitle';
import { NotFound } from '@components/organisms/NotFound';
import { MarkdownTOC } from '@components/molecules/MarkdownTOC';
import { Metadata } from 'next';
import { PostComment } from '@containers/PostComment';

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
    const markdown = parseBase64ToString(data.content);
    const properties = getProperties(markdown);
    const markdownContent = removePropertiesFromPostMarkdown(markdown);

    return (
      <Main>
        <PageContent>
          <PostTitle title={postTitle} createdAt={properties?.createdAt ?? ''} tags={properties?.tags ?? []} />
        </PageContent>

        <Divider />

        <PageContent>
          <MarkdownTOC content={markdownContent} style={{ marginBottom: 60 }} />
          <Markdown>{markdownContent}</Markdown>
        </PageContent>

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

const removePropertiesFromPostMarkdown = (markdown: string) => {
  return markdown.replace(regProperties, '');
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postTitle = decodeURIComponent(params.fileName);

  return {
    title: postTitle,
    openGraph: {
      title: postTitle,
    },
  };
}
