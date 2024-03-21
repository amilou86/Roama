import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "/profile.png";
import Header from "../Header/index";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import "../Header/styles.css";
import "./style.css";

export default function Profile() {
  // get local storage
  const inputRef0 = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const navigate = useNavigate();

  let listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
  const { firstname, username, lastname, email, password1 } = listOfUsers[0];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };
  function changeData(event) {
    event.preventDefault();
    const oldPassword = inputRef0.current.value;
    const newPassword1 = inputRef1.current.value;
    const newPassword2 = inputRef2.current.value;

    if (oldPassword != listOfUsers[0].password1) {
      toast.error("Old Password is incorrect!", {
        duration: 2000,
      });
      return;
    }
    if (newPassword1.length < 6 || newPassword1.length === 0) {
      toast.error("New Password is invalid!", {
        duration: 2000,
      });
      return;
    }
    if (newPassword1 === newPassword1) {
      listOfUsers[0].password1 = newPassword1;
      listOfUsers[0].password2 = newPassword2;
    } else {
      toast.error("Password do not match!", {
        duration: 2000,
      });
      return;
    }
    handleClose();
    localStorage.setItem("usersRoama", JSON.stringify(listOfUsers));

    //notify user on successful signup and navigate to login page
    toast.success("Password has been changed successfully!", {
      duration: 2000,
    });
    navigate("/home");
  }

  console.log(listOfUsers);

  return (
    <div>
      <Header />
      <div className="container setting-wrapper">
        <ListGroup className="list-groups">
          <ListGroup.Item>
            <img id="profile-pic" src={avatar} alt="" />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Username:</strong> {username}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>First Name:</strong> {firstname}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {lastname}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {email}
          </ListGroup.Item>
          <ListGroup.Item>
            <a onClick={handleShow} href="">
              <strong>Change Password</strong>
            </a>
          </ListGroup.Item>
        </ListGroup>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body id="post-modal">
            <input
              className="form-control"
              ref={inputRef0}
              name="oldPassword"
              type="password"
              placeholder="Old Password"
            ></input>
            <input
              className="form-control"
              ref={inputRef1}
              name="newPassword"
              type="password"
              placeholder="New Password"
            ></input>
            <input
              className="form-control"
              ref={inputRef2}
              name="newPassword"
              type="password"
              placeholder="New Password"
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" size="sm" onClick={changeData}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
