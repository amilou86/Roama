import Search from "./components/left-nav/search";
import FriendList from "./components/FriendList/friendList.jsx";
import Scroll from "./components/Scroll/scroll.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import Post from "./components/PostModal";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Search />
        </div>
        <div className="col-lg-6">
          <Scroll />
        </div>
        <div className="col-lg-3">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
