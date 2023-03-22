import useGetPosts from "./hooks/useGetPosts";

function App() {
  const { data, loading } = useGetPosts();
  console.log(data, loading);

  return <div className="App"></div>;
}

export default App;
