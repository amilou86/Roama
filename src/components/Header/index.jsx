import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/roama-logo.png";
import Logout from "../Logout/Logout";
import "./styles.css";

export default function Header() {
  // get local storage
  let listOfUsers = JSON.parse(localStorage.getItem("usersRoama"));
  const { username, firstname, lastname, email  } = listOfUsers[0];
  
  return (
    <Navbar className="bg-body-light">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src={logo}
            width="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <NavDropdown
          title={username}
          id="basic-nav-dropdown"
          className="justify-content-end"
        >
          <NavDropdown.Item id="logout-drop" href="#action/3.1">
            {firstname} {lastname}
          </NavDropdown.Item>
          <NavDropdown.Item href="/profile">
            <i className="far fa-user-circle"></i> Profile
          </NavDropdown.Item>
          <NavDropdown.Item href="/settings">
            <i className="fa fa-gear"></i> Settings
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            <Logout />
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}
