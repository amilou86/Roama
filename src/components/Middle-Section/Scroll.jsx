import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination/Pagination"
import "./styles.css";
import Feed from "./Feed";
import Post from "./Post";
import posts from "../utils/random-posts.json";
export default function Scroll() {
//   const [posts, setPosts] = useState(null);
//   useEffect(() => {
//     fetch("http://localhost:8000/posts")
//       .then((result) => {
//         return result.json();
//       })
//       .then((data) => {
//         setPosts(data);
//       });
//   }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        {currentPosts.map((post, index) => (
          <Feed
            key={index}
            username={post.username}
            profilePicture={post.profilePicture}
            postImage={post.postImage}
            post={post.post}
          />
        ))}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}
