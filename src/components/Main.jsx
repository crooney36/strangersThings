import React from "react";
import { AllPosts, Navbar, Post } from "../components";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <AllPosts />
      <Post />
      <Post />
      React Boilerplate
    </div>
  );
};

export default Main;
