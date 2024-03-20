import React, { useState } from 'react';
import Messages from "../left-nav/Messages";
import Scroll from "../Middle-Section/Scroll";
import Post from "../PostModal/index";
import RightNav from "../right-nav/index";
import FriendList from "../FriendList/friendList";
import Header from "../Header";
import FriendCards from "../FriendCards/friendCards";
import "bootstrap/dist/css/bootstrap.min.css";
import FriendRequest from "../FriendRequest/friendRequest";
import * as bootstrap from "bootstrap";
import Search from '../left-nav/Search';
import postsData from '../utils/random-posts.json';

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(postsData);

  const handleSearch = (event) => {
    event.preventDefault()
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    const filteredData = postsData.filter((post) => post.username.toLowerCase().includes(searchTerm))
    setFilteredResults(filteredData)
  }

  return (
    <>
      <Header />
      <div style={{ height: "100vh", display: "flex", overflow: "hidden" }}>
        <div className="col-lg-3">
          <Search onChange={handleSearch} value={searchTerm} />
          <FriendList />
          <FriendRequest />
          <Messages />
        </div>
        {/* {filteredResults.map(post => (<Scroll posts={filteredResults} key={post.id} />))} */}
        <Scroll posts={filteredResults} />
        <div className="col-lg-3">
          <RightNav />
          <Post />
        </div>
      </div>
        <Scroll />     
      <div className="col-lg-3">
        <RightNav />
        <Post />
      </div>
    </div>
    </>
  );
}