import React, { useState } from "react";
import Timestamp from "react-timestamp";
import "./scroll.css";

export default function Feed({ username, postImage, profilePicture, post }) {
  let currentTime = new Date();
  let postTime = currentTime;
  const [likes, setLikes] = useState(0);
  const handleLikes = (event) => {
    event.preventDefault()
    setLikes(likes + 1);
  };
  return (
    <article className="post">
      <header>
        <div className="user">
          <div className="profile-picture">
            <img src={profilePicture} alt={username} />
          </div>
          <div className="user-nickname">
            <span>{username}</span>
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
          <img alt={postImage} src={postImage} />
        </div>
      </div>
      <div className="post-caption">
        <div>
          <i className="fa-regular fa-comment"></i>
          <a onClick={handleLikes} href="">
            <i className="fa-regular fa-heart"></i>
          </a>
          {likes} Likes
        </div>
        {post}
      </div>
    </article>
  );
}
