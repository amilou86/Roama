import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import './styles.css';

export default function Logout() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        //prevent default behaiviour on form submit
        event.preventDefault();
        navigate('/');
    }
  return (
    <Button id="logout" variant="primary" size="sm" onClick={handleClick}>
      Logout
    </Button>
  );
}
