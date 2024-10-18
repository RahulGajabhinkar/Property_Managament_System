import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "./Profile.css";
import AddProperty from "./AddProperty";
import axios from 'axios';

export default function Profile() {
  const [addProperty, setAddProperty] = useState(false);
  const [properties, setProperties] = useState([]);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/addproperty')
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = () => {
    setAddProperty(!addProperty);  // Toggle AddProperty visibility
  };

  const handleImageClick = () => {
    inputRef.current.click();  // Trigger the file input click event
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);  // Set the selected file as the image
    console.log(e.target.files);  // Log the selected files
  };

  return (
    <div className="profile-container">
      <Navbar />
      <div className="landlordprofile">
        <div className="profile-header text-center">
          <div onClick={handleImageClick} style={{ cursor: 'pointer' }}>
            {image ? (
              <img className="profile-image" src={URL.createObjectURL(image)} alt="Profile" />
            ) : (
              <img className="profile-image" src="./photo.png" alt="Default Profile" />
            )}
          </div>
          <input
            type="file"
            ref={inputRef}
            style={{ display: 'none' }}  // Hide the input field
            onChange={handleUpload}  // Handle file selection
          />
          <h2>John Doe</h2>
          <p>Contact: +123456789</p>
          <p>Email: john.doe@example.com</p>
          <p>Address: 123 Main St, New York, NY 10001</p>
        </div>
      </div>
      <div className="profile-content" style={{ paddingTop: "30px" }}>
        <div className="headings" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <h2 style={{ marginLeft: "30px", color: "red", fontSize: "30px" }}><b>Properties</b></h2>
          {/* <button className="btn btn-primary" onClick={handleClick} style={{ marginRight: "30px" }}>Add property</button> */}
        </div>
        {properties.length > 0 ? (
          properties.map(property => (
            <div className='property_element' key={property._id}>
              <p>{property.landmark}</p>
              <p>{property.street}</p>
              <p>{property.city}</p>
              <p>{property.pincode}</p>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
      {/* {addProperty && (  // Render the AddProperty component only when addProperty is true
        <div className="overlay">
          <AddProperty onClose={handleClick} />  
        </div>
      )} */}
    </div>
  );
}
