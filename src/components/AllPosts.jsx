import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api-adapter";
import { Link } from "react-router-dom";

const AllPosts = (props) => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const result = await getAllPosts();
      setPosts(result.data.posts);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  // Return div containing all posts
  return (
    <div id="all-posts">
      {posts.map((post, idx) => {
        return (
          <div key={idx}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
            <h4>{post.price}</h4>
            <h4>Location: {post.location}</h4>
            <h5>Travel: {post.willDeliver}</h5>
            <p>Description: {post.description}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
