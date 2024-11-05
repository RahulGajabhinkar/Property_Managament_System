/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Profile.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [properties, setProperties] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const [newProperty, setNewProperty] = useState({ // State for new property data
    email: localStorage.getItem('email'), // Get email from local storage
    landmark: "",
    street: "",
    city: "",
    pincode: "",
  });
  const navigate = useNavigate();
  const email = localStorage.getItem('email'); // Get email from local storage

  useEffect(() => {
    if (!email) {
      navigate('/'); // Redirect if not logged in
    }

    // Fetch user info
    axios.get(`http://localhost:8001/api/getUserInfo?email=${email}`)
      .then(response => {
        setUserInfo(response.data);
      })
      .catch(error => console.error(error));

    // Fetch properties associated with the user
    axios.get(`http://localhost:8001/api/addproperty?email=${email}`)
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => console.error(error));
  }, [email, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send new property data to the server
    axios.post('http://localhost:8001/api/addproperty', newProperty)
      .then(response => {
        alert("Property has been added successfully.");
        setShowForm(false); // Close the form
        // Optionally fetch properties again to update the list
        return axios.get(`http://localhost:8001/api/addproperty?email=${newProperty.email}`);
      })
      .then(response => {
        setProperties(response.data); // Update the properties list
      })
      .catch(error => {
        console.error("Error adding property:", error);
        alert("There was an error adding the property.");
      });
  };

  return (
    <div className="profile-container">
      <Navbar />
      <div className="landlordprofile">
        <div className="profile-header text-center">
          {userInfo ? (
            <>
              <h2>{userInfo.name}</h2>
              <p>Contact: {userInfo.contact}</p>
              <p>Email: {userInfo.email}</p>
              <p>Address: {userInfo.address}</p>
            </>
          ) : (
            <p>Loading user information...</p>
          )}
        </div>
      </div>
      <div className="profile-content" style={{ paddingTop: "30px" }}>
        <div className="headings" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <h2 style={{ marginLeft: "30px", color: "red", fontSize: "30px" }}><b>Properties</b></h2>
          <button onClick={() => setShowForm(true)} style={{ marginRight: "30px" }}>Add Property</button>
        </div>
        <div className="properties">
          {properties.length > 0 ? (
            properties.map(property => (
              <div className="property_element" key={property._id}>
                <img className="properties_images" src={property.image || "https://th.bing.com/th/id/OIP.J0AiLEn9EMP-I9xljt0rqwHaE8?rs=1&pid=ImgDetMain"} alt="Property" />
                <div className='property_information'>
                  <div className="property_values">
                    <p className="property_value_heading fs-md-2 fw-bold">Landmark:</p>
                    <p>{property.landmark}</p>
                  </div>
                  <div className="property_values">
                    <p className="property_value_heading fs-md-2 fw-bold">Street:</p>
                    <p>{property.street}</p>
                  </div>
                  <div className="property_values">
                    <p className="property_value_heading fs-md-2 fw-bold">City:</p>
                    <p>{property.city}</p>
                  </div>
                  <div className="property_values">
                    <p className="property_value_heading fs-md-2 fw-bold">Pincode:</p>
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

      {/* Form for adding a new property */}
      {showForm && (
        <div className="property-form">
          <h3>Add New Property</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="landmark"
              placeholder="Landmark"
              value={newProperty.landmark}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={newProperty.street}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={newProperty.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={newProperty.pincode}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}
