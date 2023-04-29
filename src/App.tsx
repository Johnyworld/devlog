import { Link, useSearchParams } from "react-router-dom";
import useGetPosts from "./hooks/useGetPosts";
import "./style/style.css";

function App() {
  const { data: posts, loading } = useGetPosts();
  // const location = useLocation();
  // const [searchParams] = useSearchParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!data) {
  //   return <div>No data</div>;
  // }

  // const category = searchParams.get("c") || data.categories[0];

  return (
    <div className="App">
      {/* <ul>
        <li key={category}>
          <Link to={`${location.pathname}?c=All`}>All</Link>
        </li>
        {data?.categories.map((category) => (
          <li key={category}>
            <Link to={`${location.pathname}?c=${category}`}>{category}</Link>
          </li>
        ))}
      </ul> */}
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link to={post.path.replace(".md", "")}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.tags}</p>
            <p>{post.path}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
