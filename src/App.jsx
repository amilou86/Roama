import React, { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Signup from "./components/Login/signup";
import Post from "./components/Middle-Section/PostPage";
import Profile from "./components/Profile/index";
import Settings from "./components/Settings/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  //initial state for user
  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login userData={userData} setUserData={setUserData} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newpost" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
      <Toaster />
      <Toaster
        toastOptions={{
          success: {
            style: {
              borderBottom: "5px solid #08E7AF",
            },
            iconTheme: {
              primary: "#08E7AF",
              secondary: "white",
            },
          },
          error: {
            style: {
              borderBottom: "4px solid #e66c0f",
            },
            iconTheme: {
              primary: "#e66c0f",
              secondary: "white",
            },
          },
        }}
      />

      {/* <Home/>  */}
    </>
  );
}
