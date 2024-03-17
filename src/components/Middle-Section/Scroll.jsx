import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import "./styles.css";
import Feed from "./Feed";
import Post from "./Post";
import posts from "../utils/random-posts.json";
export default function Scroll() {
  // fetching data with json-server

  //   const [newPosts, setNewPosts] = useState([]);
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // pagination using load more anchor tag

  //   const PAGE_SIZE = 5;
  //   const [index, setIndex] = useState(0);
  //   const [visibleData, setVisibleData] = useState([]);
  //   useEffect(() => {
  //     const numberOfItems = PAGE_SIZE * (index + 1);
  //     const newArray = [];
  //     for (let i = 0; i < posts.length; i++) {
  //       if (i < numberOfItems) newArray.push(posts[i]);
  //     }
  //     setVisibleData(newArray);
  //   }, [index]);

  const navigate = useNavigate();
  const postForm = (event) => {
    event.preventDefault();
    navigate("/newpost");
  };

  return (
    <div id="main-section">
      <div>
        {/* <Post /> */}

        {/* navigating to post in a new page */}

        <input
        id="post-prompt"
        className="form-control"
        type="text"
        placeholder="Start a post"
        onClick={postForm}
      />

        {/* load more posts */}

        {/* {visibleData &&
          visibleData.map((post, index) => (
            <Feed
              key={index}
              username={post.username}
              profilePicture={post.profilePicture}
              postImage={post.postImage}
              post={post.post}
              time={post.timestamp}
            />
          ))} */}

        {/* load more anchor tag */}

        {/* <div id="load-more">
        <a onClick={() => setIndex(index + 1)}> Load More </a>
      </div> */}

        {/* pagination to load more posts */}

        {currentPosts &&
          currentPosts.map((post, index) => (
            <Feed
              key={index}
              username={post.username}
              profilePicture={post.profilePicture}
              postImage={post.postImage}
              post={post.post}
              time={post.timestamp}
            />
          ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
