import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateFile = async (file, type) => {
    const data = new FormData();
    console.log("Data",data);
    if (!file) {
      console.error(`No ${type} file selected`);
      return;
    }

    data.append("file", file);
    data.append("upload_preset", type === 'image' ? "images_preset" : "videos_preset");
    
    try {
      const cloudName = 'dxjrurzgg';
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${type}/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("File upload started");

    try {
      setLoading(true);

      const fileType = content.type.startsWith('image/') ? 'image' : 'video';
      const contentUrl = await updateFile(content, fileType);
      
      setContent(null);
      setLoading(false);
      console.log("File uploaded successfully:", contentUrl);
    } catch (error) {
      setLoading(false);
      console.error("File upload failed:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Upload a Video or Image</p>
        <input 
          type="file" 
          onChange={(e) => setContent(e.target.files[0])}
          accept="image/*,video/*"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default Home;
