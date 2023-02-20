import React, { useEffect, useState } from "react";
import { getIndividualPost } from "../api-adapter";

const AllPosts = (props) => {
  const [post, setPost] = useState([]);
  const [id, setid] = useState;

  async function getPost() {
    try {
      const result = await getIndividualPost(_id);
      console.log(result);
      setPost(result.data.posts._id);
    } catch (err) {
      console.log(err);
    }
  }

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

export default AllPosts;
