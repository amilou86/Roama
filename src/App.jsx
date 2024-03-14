import Search from "./components/left-nav/search"
import Messages from "./components/left-nav/messages.jsx";
import Scroll from "./components/Scroll/scroll.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import FriendList from "./components/FriendList/friendList.jsx";
import Post from "./components/PostModal";
import RightNav from "./components/right-nav/index.jsx";
// import React, { useEffect } from 'react';
// import { translateText } from './components/utils/api.js';

function App() {

  // // useEffect to trigger translation on component mount
  // useEffect(() => {    
  //   translateText();
  //   // empty array ensures the useEffect runs once only on component mount 
  //   }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Search />
          <Messages />
        </div>
        <div className="col-lg-6">
          <Scroll />
        </div>
        <div className="col-lg-3">
          <RightNav />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
