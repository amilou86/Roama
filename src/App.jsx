import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Scroll from "./components/Scroll/scroll.jsx";
import "./App.css";
import Search from "./components/left-nav/search";
import Post from "./components/PostModal/index.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Search />
      <Post />
    </>
  );
}

export default App;
