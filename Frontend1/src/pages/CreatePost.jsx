import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

  const navigate = useNavigate(); // ✅ correct place (top level)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post("http://localhost:3000/create-post", formData);

      alert("Post created successfully!");

      navigate("/feed"); // ✅ redirect after success

    } catch (err) {
      console.error("Error creating post:", err);
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        
        <input 
          type="file" 
          name="image" 
          accept="image/*" 
          required 
        />

        <input 
          type="text" 
          name="caption" 
          placeholder="Enter Caption" 
          required 
        />

        <button type="submit">Submit</button>
      </form>

    </section>
  );
}

export default CreatePost;