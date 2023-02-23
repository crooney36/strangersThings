import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const user = props.user;
  const token = props.token;
  // const messages = user.data.messages;
  return (
    <div id="profilePage">
      <div id="userMessages">
        <h1>Messages</h1>
        <div id="userMessagesList">
          {/* {messages.map((message) => {
            return (
              <div id="userMessage">
                <h3>{message.content}</h3>
              </div>
            );
          })} */}
        </div>
      </div>

      <div id="userPosts">
        <h1>Posts</h1>
      </div>
    </div>
  );
};

export default Profile;
