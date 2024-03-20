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
export default function Home() {
  return (
    <>
      <Header/>
      <div style={{ height: "100vh", display: "flex", overflow: "hidden" }}>
      <div className="col-lg-3">
        {/* <Search /> */}
        <FriendList />
        <FriendRequest />
        <Messages />
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