import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import posts from "../utils/random-posts.json";
import "./styles.css";

export default function Post() {
  // state of new post
  const [newPost, setNewPost] = useState({
    username: "logged in",
    profilePicture: "https://www.thispersondoesnotexist.com",
    postImage: "",
    post: "",
    timestamp: new Date(),
  });

  //   posting with modal

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };

  // handle input of modal

  const handleInputChange = (event) => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    setNewPost({ ...newPost, [name]: value });
  };

  //   updating posts on the page
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });

    // adding new post with post method

    // fetch("http://localhost:8000/posts", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newpost),
    // }).then(() => {
    //   return;
    // });

    // adding new post to posts list in the begining

    posts.unshift(newPost);
    // handleClose();
  };

  return (
    <div>
      <input
        id="post-prompt"
        className="form-control"
        type="text"
        placeholder="Start a post"
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body id="post-modal">
      <input
        className="form-control"
        name="username"
        type="hidden"
        onChange={handleInputChange}
        placeholder="First Name"
      ></input>
      <input
        className="form-control"
        name="profilePicture"
        type="hidden"
        onChange={handleInputChange}
        placeholder="Profile Picture"
      ></input>
      <input
        className="form-control"
        name="postImage"
        type="text"
        placeholder="Post Image"
        onChange={handleInputChange}
      ></input>
      <textarea
        className="form-control"
        name="post"
        type="text"
        onChange={handleInputChange}
        placeholder="What do you want to talk about?"
      ></textarea>
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
    </div>
  );
}
