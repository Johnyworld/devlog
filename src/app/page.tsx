import PageContent from '../components/layouts/PageContent';
import Categories from '../components/organisms/Categories';
import PostCards from '../components/organisms/PostCards';
import { ALL_CATEGORIES_KEY } from '../utils/constants';
import { Main } from '@components/layouts/Main';
import { getPostList } from 'src/calls/getPostList';

interface Props {
  searchParams: {
    c: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const posts = await getPostList();
  const currentCategory = searchParams.c || ALL_CATEGORIES_KEY;

  return (
    <Main>
      <PageContent style={{ marginBottom: 30 }}>
        <Categories posts={posts} currentCategory={currentCategory} />
      </PageContent>
      <PageContent>
        <PostCards
          posts={posts.filter(
            post => currentCategory === ALL_CATEGORIES_KEY || post.tags.includes(currentCategory),
          )}
        />
      </PageContent>
    </Main>
  );
}
