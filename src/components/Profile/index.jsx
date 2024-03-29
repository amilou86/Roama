import React from "react";
import avatar from "/profile.png";
import ListGroup from "react-bootstrap/ListGroup";
import "../Header/styles.css";
import { useState, useRef } from "react";
import "./style.css"

import Header from "../Header/index";

export default function Profile() {
  const inputRef = useRef(null);
  const [images, setImages] = useState(avatar);

  const handleClick = () => inputRef.current.click();

  const handleFileChange = (event) => {
    const files = event.target.files;
    setImages(URL.createObjectURL(files));
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i != index));
  };
  // get local storage
  let listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
  const { firstname, username, lastname, email } = listOfUsers[0];

  return (
    <div>
      <Header />
      <div className="container profile-wrapper">
        <ListGroup className="list-groups">
          <ListGroup.Item>
            <span>
              <input
                multiple
                ref={inputRef}
                style={{ display: "none" }}
                type="file"
                onChange={handleFileChange}
              />
              <img id="profile-pic" src={images} onClick={handleClick} alt="" />
            </span>
          </ListGroup.Item>
          <ListGroup.Item> <strong>Username:</strong> {username}</ListGroup.Item>
          <ListGroup.Item>
            <strong>First Name:</strong> {firstname}
          </ListGroup.Item>
          <ListGroup.Item>
          <strong>Last Name:</strong> {lastname}
          </ListGroup.Item>
          <ListGroup.Item> <strong>Email:</strong> {email}</ListGroup.Item>
          {/* <ListGroup.Item>password: {password1}</ListGroup.Item> */}
        </ListGroup>
      </div>
    </div>
  );
}
