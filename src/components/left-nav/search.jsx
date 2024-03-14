import './search.css'
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/images/roama-logo.png"
function Search(){
    return (
        <>
            <div className="left-nav">
                <img src={logo}></img>
                <form className="search-container">
                    <span className="search-icon"><IoSearch /></span>
                    <input placeholder="Search" className="leftnav-search" type="search"></input>
                </form>
            </div>
            <input placeholder="search" className="leftnav-search" type="search"></input>
        </>
        
    )
}

export default Search;