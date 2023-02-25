import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const [user] = useOutletContext();

  console.log("profile", user);
  console.log(user.data);

  let messages = user.data?.messages || [];
  let posts = user.data?.posts || [];

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
