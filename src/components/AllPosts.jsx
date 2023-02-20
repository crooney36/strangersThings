import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api-adapter";

const AllPosts = () => {
  let [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const result = await getAllPosts();
      setPosts(result);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="all-posts">
      <h1>All posts</h1>
      <Link to="new-article">
        <button>Post new article</button>
      </Link>
      {posts.length
        ? posts.map((post, idx) => {
            return (
              <div key={idx}>
                <Link to={`${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AllPosts;
