import { useSearchParams } from "react-router-dom";
import useGetPosts from "../../hooks/useGetPosts";
import PageContent from "../views/layouts/PageContent";
import Categories from "../views/organisms/Categories";
import { getCategoriesFromPosts } from "../../utils/post";
import { ALL_CATEGORIES_KEY } from "../../utils/constants";
import PostCards from "../views/organisms/PostCards";

const HomeScreen = () => {
  const { data: posts, loading } = useGetPosts();
  const [searchParams] = useSearchParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  const categories = getCategoriesFromPosts(posts);
  const currentCategory = searchParams.get("c") || categories[0];

  return (
    <main className="home-screen">
      <PageContent>
        <Categories categories={categories} />
      </PageContent>
      <PageContent>
        <PostCards
          posts={posts.filter(
            (post) =>
              currentCategory === ALL_CATEGORIES_KEY ||
              post.tags.includes(currentCategory)
          )}
        />
      </PageContent>
    </main>
  );
};

export default HomeScreen;