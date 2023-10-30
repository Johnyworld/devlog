import PageContent from '../components/views/layouts/PageContent';
// import Categories from '../components/views/organisms/Categories';
import PostCards from '../components/views/organisms/PostCards';
import { ALL_CATEGORIES_KEY, POST_LIST_API_END_POINT } from '../utils/constants';
// import { getCategoriesFromPosts } from '../utils/post';
import { Main } from '@components/views/layouts/Main';
import { getPostList } from 'src/calls/getPostList';

interface Props {
  searchParams: {
    c: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const posts = await getPostList();
  // const categories = getCategoriesFromPosts(posts);
  const currentCategory = searchParams.c || ALL_CATEGORIES_KEY;

  return (
    <Main>
      {/* <PageContent>
        <Categories categories={categories} />
      </PageContent> */}
      <PageContent>
        <PostCards
          posts={posts.filter(post => currentCategory === ALL_CATEGORIES_KEY || post.tags.includes(currentCategory))}
        />
      </PageContent>
    </Main>
  );
}
