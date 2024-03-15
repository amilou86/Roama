import React, { useState } from "react";
import Timestamp from "react-timestamp";
import "./scroll.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Feed({ username, postImage, profilePicture, post }) {
  let currentTime = new Date();
  let postTime = currentTime;
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState();
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log(name);
    console.log(value);

    // Updating the input's state
    setComment({
      comment: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment);
    handleClose();
  };

  const handleLikes = (event) => {
    event.preventDefault();
    setLikes(likes + 1);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
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
          <a href="#" onClick={handleShow}>
            <i className="fa-regular fa-comment"></i>
          </a>
          <a onClick={handleLikes} href="">
            <i className="fa-regular fa-heart"></i>
          </a>
          {likes} Likes
        </div>
        {post}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            name="comment"
            type="text"
            onChange={handleInputChange}
            placeholder="What do you want to talk about?"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="sm" onClick={handleSubmit}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </article>
  );
}
34;
