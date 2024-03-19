import React, { useRef, useState } from "react";
import Timestamp from "react-timestamp";
import "./styles.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Collapsible from "./Collapsible";

export default function Feed({ username, postImage, profilePicture, post, time }) {
  const inputRef = useRef();
  const [postComments, setPostComments] = useState([]);

  //   const [comment, setComment] = useState("");
  //   state of likes
  const [likes, setLikes] = useState(0);
  //   like button
  const handleLikes = (event) => {
    event.preventDefault();
    setLikes(likes + 1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputRef.current.value.length > 0) {
      setPostComments([...postComments, inputRef.current.value]);
      toggle();
    } else {
      // to handle empty field
      return;
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  function toggle(event) {
    if (event) {
      event.preventDefault(); // Prevent the default behavior (scrolling)
    }
    setIsOpen((isOpen) => !isOpen);
  }
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
            <Timestamp relative date={time} autoUpdate />
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
          <a href="#" onClick={toggle}>
            <i className="fa-regular fa-comment"></i>
          </a>
          <a onClick={handleLikes} href="#">
            <i className="fa-regular fa-heart"></i>
          </a>
          {likes} Likes
        </div>
        {post}
        <div>
          <Collapsible
            comment={postComments.map((postComment, index) => (
              <p className="comments" key={index}>
                {postComment}
              </p>
            ))}
          />
        </div>
      </div>
      {isOpen && (
        <div id="comment-form">
          {" "}
          <input
            className="form-control"
            name="comment"
            ref={inputRef}
            type="text"
            placeholder="Add a comment..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit(event);
              }
            }}
          ></input>
          {/* <div id="comment-btn">
            {" "}
            <a href="#" onClick={handleSubmit}>
              <i className="fa-regular fa-comment"></i>
            </a>
          </div> */}
        </div>
      )}
    </article>
  );
}
