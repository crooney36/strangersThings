import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../api-adapter";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);

  const handleGetUser = async () => {
    try {
      const data = await getUser();
      setUser(data);
      setMessages(data.messages);
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    }
    return (
      <div id="profile">
        <h1>Profile</h1>
        <h2>Welcome {user.username}</h2>
        <h2>Messages</h2>
        {messages.map((message) => {
          return (
            <div>
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
};

export default Profile;
