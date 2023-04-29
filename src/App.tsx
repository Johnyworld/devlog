import { Link, useLocation, useSearchParams } from "react-router-dom";
import useGetPosts from "./hooks/useGetPosts";
import { getCategoriesFromPosts } from "./utils/post";
import "./style/style.css";

const ALL_CATEGORIES_KEY = "All";

function App() {
  const { data: posts, loading } = useGetPosts();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  const categories = getCategoriesFromPosts(posts);
  const currentCategory = searchParams.get("c") || categories[0];

  return (
    <div className="App">
      <ul>
        <li key={ALL_CATEGORIES_KEY}>
          <Link to={`${location.pathname}?c=${ALL_CATEGORIES_KEY}`}>All</Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`${location.pathname}?c=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {posts
          .filter(
            (post) =>
              currentCategory === ALL_CATEGORIES_KEY ||
              post.tags.includes(currentCategory)
          )
          .map((post) => {
            return (
              <li key={post.title}>
                <Link to={post.path.replace(".md", "")}>
                  <h3>{post.title}</h3>
                </Link>
                <p>{post.tags}</p>
                <p>{post.path}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
