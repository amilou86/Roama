import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination/Pagination";
import "./styles.css";
import Feed from "./Feed";
import Post from "./Post";
import posts from "../utils/random-posts.json";
export default function Scroll() {

  //   pagination of posts
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // pagination using load more anchor tag
  //   const PAGE_SIZE = 3; // or whatever you like
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

  return (
    <div id="main-section">
      <div>
        <Post />

        {/* load more posts */}
        {/* {visibleData.map((post, index) => ( */}

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
      </div>

      {/* load more anchor tag */}
      {/* <div id="load-more">
        <a onClick={() => setIndex(index + 1)}> Load More </a>
      </div> */}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
