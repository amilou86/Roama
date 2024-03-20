import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Feed from "./Feed";
import posts from "../utils/random-posts.json";
export default function Scroll({ posts }) {
  // fetching data with json-server

  //   const [newPosts, setNewPosts] = useState([]);

  const rootRef = useRef();
  const observerRef = useRef();
  const lastItemRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage((prev) => prev + 1);
          }
        });
      },
      {
        root: rootRef.current,
      }
    );
  }, [rootRef.current]);

  useEffect(() => {
    if (!observerRef.current || !lastItemRef.current) {
      return;
    }
    observerRef.current.observe(lastItemRef.current);
  }, [observerRef.current, lastItemRef.current]);


  let indexOfLastPost = currentPage * postsPerPage;
  const currentPosts = [];
  while (indexOfLastPost > posts.length) {
    currentPosts.push(...posts);
    indexOfLastPost -= posts.length;
  }
  currentPosts.push(...posts.slice(0, indexOfLastPost));

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const navigate = useNavigate();
  const postForm = (event) => {
    event.preventDefault();
    navigate("/newpost");
  };

  return (
    <div className="col scrollBar" style={{ overflow: "scroll" }} ref={rootRef}>
      <div id="main-section">
        {/* navigating to post in a new page */}

        <input
          id="post-prompt"
          className="form-control"
          type="text"
          placeholder="Start a post"
          onClick={postForm}
        />
        {/* pagination to load more posts */}
        {currentPosts.map((post, index) => (
          <Feed
            key={index}
            username={post.username}
            profilePicture={post.profilePicture}
            postImage={post.postImage}
            post={post.post}
            time={post.timestamp}
          />
        ))}

        <div ref={lastItemRef} style={{ height: "1rem" }}></div>
      </div>
    </div>
  );
}
