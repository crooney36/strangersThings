import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);
  const Navigate = useNavigate();

  if (!props.isLoggedIn) {
    return (
      // Render navbar for users not logged in
      <div id="navbar">
        <div id="navbar-title">Stranger's Things</div>
        <div id="search-bar">
          <input type="search" placeholder="Search for items!" />
          <button id="searchButton">Search</button>
        </div>
        <div id="nav-buttons">
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="login-page">
            <button className="nav-button">Login</button>
          </Link>
        </div>
      </div>
    );
  } else if (props.isLoggedIn) {
    // Render navbar for users who are logged in'
    return (
      <div id="navbar">
        <div id="navbar-title">Stranger's Things</div>
        <div id="search-bar">
          <input type="search" placeholder="Search for items!" />
          <button id="searchButton">Search</button>
        </div>
        <div id="nav-buttons">
          <Link to="/">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="newpost-page">
            <button className="nav-button">New Post</button>
          </Link>
          <button
            className="nav-button"
            onClick={() => {
              localStorage.removeItem("token");
              props.setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
          <Link to="profile-page">
            <button className="nav-button">Profile</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
