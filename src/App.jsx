import { useState } from "react";
import Scroll from "./components/Scroll/Scroll";

import Search from "./components/left-nav/search";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

function App() {
  const [count, setCount] = useState(0);
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
