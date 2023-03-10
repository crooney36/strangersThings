import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api-adapter";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

// Fetch all posts from api
const AllPosts = (props) => {
  const [posts, setPosts] = useState([]);
  let [searchTerm, setSearchTerm] = useOutletContext();
  searchTerm = useOutletContext();
  const navigate = useNavigate();

  async function getPosts() {
    try {
      const result = await getAllPosts();
      setPosts(result.data.posts);
    } catch (err) {
      console.log(err);
    }
  }
  //Search posts
  const searchPosts = (e) => {
    e.preventDefault();
    console.log("searching");
    console.log(searchTerm);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // Return div containing all posts
  return (
    <div id="all-posts" className="container">
      {posts.map((post, idx) => {
        return (
          <div id="single-posts" key={idx}>
            <Link to={`/${post._id}`}>{post.title}</Link>
            <h4>Price: {post.price}</h4>
            <h4>Seller: {post.author.username}</h4>
            <h4>Location: {post.location}</h4>
            <h4>Delivery: {post.willDeliver}</h4>
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
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default AllPosts;
