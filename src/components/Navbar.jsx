import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-title">Stranger's Things</div>
      <div id="nav-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">New Post</button>
        <button className="nav-button">Login</button>
        <button className="nav-button">Logout</button>
        <button className="nav-button">Messages</button>
      </div>
    </div>
  );
};

export default Navbar;
