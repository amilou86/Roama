import Search from "./components/left-nav/search";
import FriendList from "./components/FriendList/friendList";
import Scroll from "./components/Scroll/scroll.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Search />
        </div>
        <div className="col-lg-6">
          <Scroll />
        </div>
        <div className="col-lg-3">posts</div>
      </div>
    </div>
  );
}

export default App;
