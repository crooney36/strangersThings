import React, { useEffect, useState } from "react";
import { getIndividualPost } from "../api-adapter";
import { useParams } from "react-router-dom";

const Post = (props) => {
  const [post, setPost] = useState([]);
  let { id } = useParams();
  async function getPost() {
    try {
      const result = await getIndividualPost(id);
      setPost(result.data.posts);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPost();
  }, []);

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

      <br />
    </div>
  );
};

export default Post;
