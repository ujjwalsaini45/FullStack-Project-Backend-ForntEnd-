import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "A beautiful scenery!"
    }
  ]);

useEffect(() => {
  axios.get("http://localhost:3000/posts")
    .then((res) => {
      console.log(res.data);

      // ✅ ensure caption always exists
      const updatedPosts = res.data.posts.map((post) => ({
        ...post,
        caption: post.caption || "No caption available"
      }));

      setPosts(updatedPosts);
    })
    .catch((err) => {
      console.error("Error fetching posts:", err);
    });
}, []);

  return (
    <section className='feed-section'>
      {posts.map((post) => (
        <div key={post._id} className='post-card'>
          <img src={post.image} alt="Post" className='post-image' />
          <p className='post-caption'>{post.caption}</p>
        </div>
      ))}
    </section>
  );
}

export default Feed;