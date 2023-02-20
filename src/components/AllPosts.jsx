import React, { useEffect, useState } from "react";
import { getAllPosts } from "../api-adapter";

const AllPosts = (props) => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const result = await getAllPosts();
      console.log(result)
      setPosts(result.data.posts);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts)
 
return (
    <div id="all-posts">
      {posts.map((post, idx) => {
        return(
         <div> <h1 key={posts._id}>{post.title} </h1> </div>
        )
      })}
    </div>
    
    //   <h1>All posts</h1>
    //   <Link to="new-article">
    //     <button>Post new article</button>
    //   </Link>
    //   {posts.length
    //     ? posts.map((post, idx) => {
    //         return (
    //           <div key={idx}>
    //             <Link to={`${post.id}`}>
    //               <h3>{post.title}</h3>
    //             </Link>
    //           </div>
    //         );
    //       })
    //     : null}
    
  );
};

export default AllPosts;
