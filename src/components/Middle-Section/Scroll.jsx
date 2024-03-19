import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import "./styles.css";
import Feed from "./Feed";
import Post from "./Post";
import posts from "../utils/random-posts.json";
export default function Scroll() {
  const rootRef = useRef()
  const observerRef = useRef()
  const lastItemRef = useRef()

  useEffect(() => {
    if (!rootRef.current) {
      return
    }
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage((prev) => prev + 1

          )
        }
      })
    }, {
      root: rootRef.current
    })
  }, [rootRef.current])

  useEffect(() => {
    if (!observerRef.current || !lastItemRef.current) {
      return
    }
    observerRef.current.observe(lastItemRef.current)
  }, [observerRef.current, lastItemRef.current])

  //   useEffect(() => {
  //     fetch("http://localhost:8000/posts")
  //       .then((result) => {
  //         return result.json();
  //       })
  //       .then((data) => {
  //         setPosts(data);
  //       });
  //   }, []);

  //   pagination of posts
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // get current posts
  let indexOfLastPost = currentPage * postsPerPage;
  const currentPosts = [];
  while (indexOfLastPost > posts.length) {
    currentPosts.push(...posts)
    indexOfLastPost -= posts.length
  }
  currentPosts.push(...posts.slice(0, indexOfLastPost))
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="col" style={{ overflow: "scroll" }} ref={rootRef}>

      <div id="main-section">

        <Post />

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
