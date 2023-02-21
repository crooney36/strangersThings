import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const isLoggedin = false
  return (
    <div id="navbar">
      <div id="navbar-title">Stranger's Things</div>
      <div id="nav-buttons">
      <Link to ="/"><button className="nav-button">Home</button></Link>
        <Link to ="Newpost-page"><button className="nav-button">New Post</button></Link>
        <Link to ="login-page"><button className="nav-button">Login</button></Link>
        <button className="nav-button" onClick ={()=>{isLoggedin=false}}>Logout</button>
        <button className="nav-button">Messages</button>
      </div>
    </div>
  );
};

export default Navbar;
