import React, { useEffect, useRef, useState } from "react";
import Feed from "./Feed";
import Post from "./Post";
import posts from "../utils/random-posts.json";
export default function Scroll() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, []);
  return (
    <div id="main-section">
      <Post />
      {posts && posts.map((post, index) => (
        <Feed
          key={index}
          username={post.username}
          profilePicture={post.profilePicture}
          postImage={post.postImage}
          post={post.post}
        />
      ))}
    </div>
  );
}
