import './search.css'
import { IoSearch } from "react-icons/io5";
import logo from "/roama-logo.png"

const searchButton = document.querySelector("leftnav-search")
const allFollowers = document.querySelector(".who-you-follow")


function searchFollowers(){
    searchButton.addEventListener("click", function(){
    allFollowers.classList.remove("hide")
    })
}



export default function Search(){
    return (
        <>
            <div className="left-nav">
                <div className="logo-container">
                    <img className="logo" src={logo}></img>
                </div>
                <form className="search-container">
                    <span className="search-icon"><IoSearch /></span>
                    <input onClick={searchFollowers} placeholder="Search" className="leftnav-search" type="search"></input>
                    <div className="who-you-follow hide">
                        <h3>Recent</h3>
                        <hr></hr>
                    </div>
                </form>
            </div>
        </>
        
    )
}