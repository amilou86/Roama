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


export default function postSearch() {

    // Setting initial state to the friendData json array
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState(postsData);


    const handleChange = (event) => {
        const term = event.target.value.toLowerCase()
        setSearchTerm(term)
        console.log(searchTerm)
        const filteredResults = postsData.filter((post) => post.username.toLowerCase().includes(searchTerm))
        console.log(filteredResults)
        setPosts(filteredResults)
        console.log(posts)
    }

    return (
        <>
            <div className="left-nav">
                <form className="search-container">
                    <span className="search-icon"><IoSearch /></span>
                    <input placeholder="Search" onChange={handleChange} value={searchTerm} className="leftnav-search" type="search"></input>
                </form>
            </div>
            {posts.map(post => (
                <Scroll key={post.id} post={post} />
            ))}
        </>


    )
}



