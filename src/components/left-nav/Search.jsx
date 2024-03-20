import './search.css'
import { IoSearch } from "react-icons/io5";
import logo from "/roama-logo.png"
import React, { useState } from 'react';
import requestsData from '../utils/requests.json';
import { ToastContainer, toast } from 'react-toastify';
import Post from "../Middle-Section/Post"
// import Feed from "./Feed";
import postsData from "../utils/random-posts.json";
import Scroll from '../Middle-Section/Scroll';


export default function postSearch({ onChange, value }) {

    const handleChange = (event) => {
        onChange(event)
    }


    return (
        <>
            <div className="left-nav">
                <div className="search-container">
                    <span className="search-icon"><IoSearch /></span>
                    <input placeholder="Search" onChange={handleChange} value={value} className="leftnav-search" type="search"></input>
                </div>
            </div>
        </>
    )
}



