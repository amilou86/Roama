import React from "react";
import avatar from "/profile.png";
import ListGroup from "react-bootstrap/ListGroup";
import "../Header/styles.css";
import { FaRegImage } from "react-icons/fa";
import { useState, useRef } from "react";

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
      <div className="container">
        {/* <div>
        <input multiple ref={inputRef} style={{ display: "none" }} type="file" onChange={handleFileChange}/>
        <FaRegImage size={20} onClick={handleClick} className="upload-picture"/>
        </div> */}
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
          <ListGroup.Item> username: {username}</ListGroup.Item>
          <ListGroup.Item>
            name: {firstname} {lastname}
          </ListGroup.Item>
          <ListGroup.Item> email: {email}</ListGroup.Item>
          {/* <ListGroup.Item>password: {password1}</ListGroup.Item> */}
        </ListGroup>
      </div>
    </div>
  );
}
