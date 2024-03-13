import "./App.css";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Scroll from './components/Scroll/scroll.jsx';
import './App.css'
import Search from './components/left-nav/search'
import FriendList from './components/FriendList/friendList'

function App() {
  const [count, setCount] = useState(0);
  return <Search />
}

export default App;
