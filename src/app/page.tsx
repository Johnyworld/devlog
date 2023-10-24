import { parseBase64ToString } from '@utils/parseBase64ToString';
import { Post } from 'type';
import PageContent from '../components/views/layouts/PageContent';
import Categories from '../components/views/organisms/Categories';
import PostCards from '../components/views/organisms/PostCards';
import { ALL_CATEGORIES_KEY } from '../utils/constants';
import { getCategoriesFromPosts } from '../utils/post';

interface Props {
  searchParams: {
    c: string;
  };
}

async function getData() {
  const res = await fetch('https://api.github.com/repos/johnyworld/dev-archive/contents/generatedList.json');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const parseBase64ToObject = (data: string) => {
  return JSON.parse(parseBase64ToString(data));
};

export default async function Page({ searchParams }: Props) {
  const data = await getData();
  const posts: Post[] = parseBase64ToObject(data.content);
  const categories = getCategoriesFromPosts(posts);
  const currentCategory = searchParams.c || categories[0];

  return (
    <main>
      <PageContent>
        <Categories categories={categories} />
      </PageContent>
      <PageContent>
        <PostCards
          posts={posts.filter(post => currentCategory === ALL_CATEGORIES_KEY || post.tags.includes(currentCategory))}
        />
      </PageContent>
    </main>
  );
}
