import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/johnyworld/dev-archive/readme")
      .then((res) => {
        const content = decodeURIComponent(escape(atob(res.data.content)));
        const match = content
          .match(/[#]{3}(.+)/g)
          ?.map((str) => str.replace(/[#]{3} /, ""));
        const replace = content.match(/\[(.*?)\]\((.*?)\)/g)?.map((str) => {
          const category = content.split(str)[0].match(/[#]{3}/g)?.length || 0;
          const [name, path] = str
            .replace(/\[(.*?)\]\((.*?)\)/g, "$1.$2")
            .split(".");
          return { category: match?.[category - 1], name, path: "/" + path };
        });
        console.log({ match, content, replace });
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
