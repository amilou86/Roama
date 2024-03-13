import './search.css'
import { IoSearch } from "react-icons/io5";
import logo from "../../../public/"

function Search(){
    return (
        <div>

            <div className="left-nav">
                <img src=""></img>
                <form className="search-container">
                    <span className="search-icon"><IoSearch /></span>
                    <input placeholder="Search" className="leftnav-search" type="search"></input>
                </form>
            </div>
        </div>
        
    )
}

export default Search;