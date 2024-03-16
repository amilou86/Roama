import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function Logout() {
    const handleClick = (event) => {
        //prevent default behaiviour on form submit
        event.preventDefault();
        navigate('/login');
        console.log(loginData);
    }
  return (
    <Button variant="primary" size="sm" onClick={handleClick}>
      Post
    </Button>
  );
}
