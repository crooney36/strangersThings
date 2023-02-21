import React, { useEffect, useState, useParams } from "react";
import { getIndividualPost } from "../api-adapter";

const AllPosts = (props) => {
  const [post, setPost] = useState([]);
  let { id } = useParams();

  async function getPost() {
    try {
      const result = await getIndividualPost(id);
      setPost(result);
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
      <h1>{props.title} </h1>
      <h4>{props.price}</h4>
      <h4>Location: {props.location}</h4>
      <h5>Travel: {props.willDeliver}</h5>
      <p>Description: {props.description}</p>
      <br />
    </div>
  );
};

export default { AllPosts };
