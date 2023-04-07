import React, { useState, useEffect } from "react";

const ScrollHead = ( { scrolled } ) => {

    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [login, setLogin] = useState(false);


    const toggleLogin = () => {
        setLogin();
      };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className={`scroll-header ${scrolled ? "fixed" : ""}`}>
          <div className="search-container">
            <input type="text" className="search-bar"></input>
          </div>
          <button className="login-btn" onClick={toggleLogin}>
            <i className="far fa-user-circle"></i> Sign in
          </button>
        </div>
      );
    };
    

export default ScrollHead