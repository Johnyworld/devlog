import { Link } from "react-router-dom";
import useGetPosts from "./hooks/useGetPosts";

function App() {
  const { data, loading } = useGetPosts();
  console.log(data, loading);

  return (
    <div className="App">
      <ul>
        {data?.categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>
      <ul>
        {data?.posts.map((post) => (
          <li>
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
