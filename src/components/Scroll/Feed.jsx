import React from "react";
import Timestamp from "react-timestamp";

import "./scroll.css";

export default function Feed({ post }) {
  let currentTime = new Date();
  let postTime = currentTime;
  return (
    <article className="post">
      <header>
        <div className="user">
          <div className="profile-picture">
            <img src="/person_1.jpeg" alt="Abdalla" />
          </div>
          <div className="user-nickname">
            <span>Abdalla Diaai</span>
          </div>
          <div className="user-nickname">
            <span>
            <Timestamp relative date={postTime} autoUpdate />
            </span>
          </div>
        </div>
      </header>

      <div className="post-image">
        <div className="post-image-bg">
          <img alt="Planet Earth" src="/earth.jpg" />
        </div>
      </div>
      <div className="post-caption">
        <strong>John D. Veloper </strong> {post}
      </div>
    </article>
  );
}
