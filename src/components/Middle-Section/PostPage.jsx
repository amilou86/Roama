import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import posts from "../utils/random-posts.json";
import "./styles.css";
import { FaRegImage } from "react-icons/fa";

export default function Post() {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleClick = () => inputRef.current.click();

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((event) => event.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i != index));
  };

  // state of new post
  const [newPost, setNewPost] = useState({
    username: "logged in",
    profilePicture: "https://www.thispersondoesnotexist.com",
    postImage: "",
    post: "",
    timestamp: new Date(),
  });

  // posting with navigating to new page

  const navigate = useNavigate();
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
    navigate("/home");
  };

  return (
    <div id="form-container" className="container">
      <form id="new-post-form" className="row" onSubmit={handleSubmit}>
        <input
          className="form-control post-form"
          name="username"
          type="hidden"
          onChange={handleInputChange}
          placeholder="First Name"
        ></input>
        <input
          className="form-control post-form"
          name="profilePicture"
          type="hidden"
          onChange={handleInputChange}
          placeholder="Profile Picture"
        ></input>
        <input
          className="form-control post-form"
          name="postImage"
          type="text"
          placeholder="Post Image"
          onChange={handleInputChange}
        ></input>
        <textarea
          className="form-control post-form"
          name="post"
          type="text"
          onChange={handleInputChange}
          placeholder="What do you want to talk about?"
        ></textarea>

        {images.map((images, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteImage(index)}>
              &times;
            </span>
            <img src={images.url} alt={images.name} />
          </div>
        ))}

        {/* <input multiple ref={inputRef} style={{ display: "none" }} type="file" onChange={handleFileChange}/> */}
        <FaRegImage
          size={20}
          onClick={handleClick}
          className="upload-picture"
        />
        <p>Upload Image</p>
        <div id="submit-btn">
          <Button id="new-post-btn" type="submit" size="sm">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
}
