import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedin = false;
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
        <Link to="login-page">
          <button className="nav-button">Login</button>
        </Link>
        <button
          className="nav-button"
          onClick={() => {
            isLoggedin = false;
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
};

export default Navbar;
