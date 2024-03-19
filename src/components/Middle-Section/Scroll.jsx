import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Post from "./Post"
import Feed from "./Feed";
import posts from "../utils/random-posts.json";
export default function Scroll() {

  // fetching data with json-server

  //   const [newPosts, setNewPosts] = useState([]);

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
  //         setNewPosts(data);
  //       });
  //   }, []);

  //   pagination of posts

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // get current posts


  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  let indexOfLastPost = currentPage * postsPerPage;
  const currentPosts = [];
  while (indexOfLastPost > posts.length) {
    currentPosts.push(...posts)
    indexOfLastPost -= posts.length
  }
  currentPosts.push(...posts.slice(0, indexOfLastPost))

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // const button = document.getElementById("instant-top-button");
  // to scroll to top
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "instant" });
  // }, [currentPage]);



  const navigate = useNavigate();
  const postForm = (event) => {
    event.preventDefault();
    navigate("/newpost");
  };

  return (
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

       <div className="col" style={{ overflow: "scroll" }} ref={rootRef}>


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
  )
}

