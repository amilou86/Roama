import React from "react";
import avatar from "/profile.png";
import Header from "../Header/index";
import ListGroup from "react-bootstrap/ListGroup";
import "../Header/styles.css";


export default function Profile() {
  // get local storage
  let listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
  const { firstname, username, lastname, email, password1 } = listOfUsers[0];

  return (
    <div>
      <Header />
      <ListGroup className="list-groups">
        <ListGroup.Item>
          <img id="profile-pic" src={avatar} alt="" />
        </ListGroup.Item>
        <ListGroup.Item> username: {username}</ListGroup.Item>
        <ListGroup.Item>
          name: {firstname} {lastname}
        </ListGroup.Item>
        <ListGroup.Item> email: {email}</ListGroup.Item>
        <ListGroup.Item>password: {password1}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
