import React, { useState } from "react";
import { makePost } from "../api-adapter";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [willDeliver, setWillDeliver] = useState("");
  return (
    <div>
      <form onSubmit ={(e) => {
        e.preventDefault()
        makePost()
      }}>
        <input
          type="text"
          placeholder="title"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="location"
          value={location}
          required
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="price"
          value={price}
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Delivery?"
          value={willDeliver}
          required
          onChange={(e) => {
            setWillDeliver(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default NewPost;
