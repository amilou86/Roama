import React from "react";
import Search from "../left-nav/Search";
import Messages from "../left-nav/Messages";
import Scroll from "../Middle-Section/Scroll";
import Header from "../Header/index";
import RightNav from "../right-nav/index";
import FriendList from "../FriendList/friendList";
import FriendCards from "../FriendCards/friendCards";
import "bootstrap/dist/css/bootstrap.min.css";
import FriendRequest from "../FriendRequest/friendRequest";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <Search />
          <FriendList />
          <FriendRequest />
          <Messages />
        </div>
        <div className="col-lg-6">
          <Scroll />
        </div>

        <div className="col-lg-3">{/* <RightNav /> */}</div>
      </div>
    </div>
  );
}
