import { Link, useLocation, useSearchParams } from "react-router-dom";
import useGetPosts from "./hooks/useGetPosts";
import "./style/style.css";

function App() {
  const { data, loading } = useGetPosts();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const category = searchParams.get("c") || data.categories[0];

  return (
    <div className="App">
      <ul>
        <li key={category}>
          <Link to={`${location.pathname}?c=All`}>All</Link>
        </li>
        {data?.categories.map((category) => (
          <li key={category}>
            <Link to={`${location.pathname}?c=${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {data?.posts
          .filter((post) => category === "All" || post.category === category)
          .map((post) => (
            <li key={post.name}>
              <Link to={post.path}>
                <h3>{post.name}</h3>
              </Link>
              {post.desc && <p>{post.desc}</p>}
              <p>{post.category}</p>
              <p>{post.path}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
