import './search.css'
import { IoSearch } from "react-icons/io5";
import logo from "/roama-logo.png"


function Search(){
    return (
        <>
            <div className="left-nav">
                <div className="logo-container">
                    <img className="logo" src={logo}></img>
                </div>
                <form className="search-container">
                    <span className="search-icon"><IoSearch /></span>
                    <input placeholder="Search" className="leftnav-search" type="search"></input>
                </form>
            </div>
        </>
        
    )
}

export default Search;