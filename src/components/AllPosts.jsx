import React, { useEffect, useState } from "react";
import { getAllPosts, deletePost } from "../api-adapter";
import { Link, useNavigate } from "react-router-dom";

// Fetch all posts from api
const AllPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  async function getPosts() {
    try {
      const result = await getAllPosts();
      setPosts(result.data.posts);
    } catch (err) {
      console.log(err);
    }
  }

  // Delete post from api
  async function deletePostFromBackend(id) {
    let currentPosts = posts;
    try {
      await deletePost(id);
      currentPosts.splice(idx, 1);
      setPosts(currentPosts);
      navigate("/");
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
          <div key={idx} id="single-posts">
            <Link to={`/${post._id}`}>{post.title}</Link>
            <h4>{post.price}</h4>
            <h4>Location: {post.location}</h4>
            <button id="all-posts-sendMessage">Send Message</button>
            {post.isAuthor ? (
              <div>
                <button
                  onClick={() => {
                    deletePostFromBackend(post._id, idx);
                  }}
                >
                  Delete Post
                </button>
              </div>
            ) : null}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
