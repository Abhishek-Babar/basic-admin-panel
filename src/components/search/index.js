import React, { useState } from "react";

const Search = ({loadNames}) => {
    
    return(
        <form action="/">
        <img src='./img/search-icon.svg' alt="Search Icon" ></img>
        <input type="text" placeholder="Enter something"  name="search-box" id="search-box" onChange={loadNames} />
        </form>
    )
}
export default Search;