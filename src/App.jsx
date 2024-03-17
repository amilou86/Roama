import React, { useState } from 'react';
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Signup from './components/Login/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  
  //initial state for user
  const [userData, setUserData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: ''
  })

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login userData={userData} setUserData={setUserData} />}  />
        <Route path='/signup' element={<Signup/>}  />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>

     {/* <Home/>  */}
    </>
  );
}