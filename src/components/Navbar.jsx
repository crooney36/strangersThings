import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-title">Stranger's Things</div>
      <div id="nav-buttons">
        <button class="nav-button">Home</button>
        <button class="nav-button">Login</button>
        <button class="nav-button">Logout</button>
        <button class="nav-button">Messages</button>
      </div>
    </div>
  );
};

export default Navbar;
