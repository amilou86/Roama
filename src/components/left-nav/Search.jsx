import "./search.css";
import { IoSearch } from "react-icons/io5";
import React from "react";

export default function postSearch({ onChange, value }) {
  const handleChange = (event) => {
    event.preventDefault()
    onChange(event);
  };

  return (
    <>
      <div className="left-nav">
        <div className="search-container">
          <span className="search-icon">
            <IoSearch />
          </span>
          <input
            placeholder="Search"
            onChange={handleChange}
            value={value}
            className="leftnav-search"
            type="search"
          ></input>
        </div>
      </div>
    </>
  );
}
