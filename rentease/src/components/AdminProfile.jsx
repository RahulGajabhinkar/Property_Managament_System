/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "./Profile.css";
import AddProperty from "./AddProperty";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const [addProperty, setAddProperty] = useState(false);
  const [properties, setProperties] = useState([]);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:5000/api/addproperty')
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = () => {
    navigate('/addProperty') 
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
            style={{ display: 'none' }}  
            onChange={handleUpload}  
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
          <button className="btn btn-primary" onClick={handleClick} style={{ width:"200px", marginRight: "30px" }}>Add property</button>
        </div>
        <div className = "properties">
        {properties.length > 0 ? (
          properties.map(property => (
            <div className = "property_element">
              <img className= "properties_images"  src= "https://th.bing.com/th/id/OIP.J0AiLEn9EMP-I9xljt0rqwHaE8?rs=1&pid=ImgDetMain" alt = ""></img>
              <input 
              type = "file"
              />
              <div className='property_information' key={property._id}>
              <div className = "property_values">
              <p className= " property_value_heading fs-md-2 fw-bold">LandMark:</p>
              <p>{property.landmark}</p>
              </div>
              <div className = "property_values">
              <p className= "property_value_heading fs-md-2 fw-bold">Street:</p>
              <p>{property.street}</p>
              </div>
              <div className = "property_values">
              <p className= "property_value_heading fs-md-2 fw-bold">City:</p>
              <p>{property.city}</p>
              </div>
              <div className = "property_values">
              <p className= "property_value_heading fs-md-2 fw-bold">Pincode:</p>
              <p>{property.pincode}</p>
              </div>
              
            </div>
            </div>
            
          ))
        ) : (
          <p>No properties available.</p>
        )}
        </div>
      </div>
      {addProperty && (  // Render the AddProperty component only when addProperty is true
        <div className="overlay">
          <AddProperty onClose={handleClick} />  
        </div>
      )}
    </div>
  );
}
