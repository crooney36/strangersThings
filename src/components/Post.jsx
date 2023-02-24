import React, { useEffect, useState } from "react";
import { getIndividualPost, deletePost } from "../api-adapter";
import { useParams, useOutletContext } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  let { id } = useParams();
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

  // Get single post
  async function getPost(id) {
    try {
      const result = await getIndividualPost(id);
      console.log("query result", result);
      setPost(result.data.posts);
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
    getPost(id);
  }, []);

  // Set isAuthor = true if post.author._ID === user._ID
  useEffect(() => {
    if (post.author) {
      if (post.author._id === user._id) {
        setIsAuthor(true);
      }
    }
  }, [post]);

  // Return div containing data for a single post
  return (
    <div id="single-post">
      <h1>{post.title} </h1>
      <h4>Price: {post.price}</h4>
      <h4>Location: {post.location}</h4>
      <h5>Travel: {post.willDeliver}</h5>
      <p>Description: {post.description}</p>
      {localStorage.getItem("token") ? (
        <Link to={"send-messages-page"}>
          <button id="all-posts-sendMessage">Send Message</button>
        </Link>
      ) : null}
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
    </div>
  );
};

export default Post;
