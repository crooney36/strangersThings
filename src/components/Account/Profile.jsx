import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { getUser } from "../../api-adapter";

const Profile = (props) => {
  const [
    token,
    setToken,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    isAuthor,
    setIsAuthor,
  ] = useOutletContext();
  let messages = user.messages;

  return (
    <div id="profile">
      <h1>Profile</h1>
      <h2>Welcome {user.username}</h2>
      <h2>Messages</h2>
      {messages.map((message) => {
        return (
          <div>
            <h5>{message.fromUser}</h5>
            <h5>{message.post}</h5>
            <p>{message.content}</p>
          </div>
        );
      })}
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <div>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
