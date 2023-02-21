import React, { useEffect, useState } from "react";
import { getIndividualPost } from "../api-adapter";
import { useParams } from "react-router-dom";

const Post = (props) => {
  const [post, setPost] = useState([]);
  let { id } = useParams();
  console.log(id);
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
      <h4>{post.price}</h4>
      <h4>Location: {props.location}</h4>
      <h5>Travel: {props.willDeliver}</h5>
      <p>Description: {props.description}</p>
      <button>Send Message</button>
      <br />
      <br />
    </div>
  );
};

export default Post;
