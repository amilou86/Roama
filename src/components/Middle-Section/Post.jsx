import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "./styles.css";

export default function Post() {
  const [posts, setPosts] = useState({
    username: "",
    profilePicture: "",
    postImage: "",
    post: "",
  });
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
    setPosts({ ...posts, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(event.target);
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posts),
    }).then(() => {
      return;
    });
    setPosts({ ...posts, [name]: value });
    handleClose();
  };

  return (
    <div>
      <input id="post-prompt" className="form-control" type="text" placeholder="Start a post" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body id="post-modal">
          <input
            className="form-control"
            name="username"
            type="text"
            onChange={handleInputChange}
            placeholder="First Name"
          ></input>
          <input
            className="form-control"
            name="profilePicture"
            type="text"
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
