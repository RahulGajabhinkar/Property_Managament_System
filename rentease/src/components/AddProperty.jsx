import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProperty.css";
import axios from "axios";

export default function AddProperty({ onClose }) {
  const [information, setInformation] = useState({
    landmark: "",
    street: "",
    city: "",
    pincode: "",
  });
  const [imageFile, setImageFile] = useState(null);
  let navigate = useNavigate();

  const handleClose = () => {
    navigate("/profile");
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("landmark", information.landmark);
    formData.append("street", information.street);
    formData.append("city", information.city);
    formData.append("pincode", information.pincode);
    formData.append("images", imageFile); // Append the image file

    try {
      const response = await axios.post("http://localhost:5000/api/addproperty", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        console.log("Property added:", response.data);
        navigate("/profile"); // Redirect to profile or any other page after success
      }
    } catch (error) {
      console.error("Error posting property:", error);
    }
  };

  const onChange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  return (
    <div className="blur-background">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="Cancel">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputLandMark">LandMark</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLandMark"
            placeholder="Landmark"
            name="landmark"
            value={information.landmark}
            onChange={onChange}
          />
        </div>

        <div>
          <label htmlFor="exampleInputStreet">Street</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputStreet"
            placeholder="Street"
            name="street"
            value={information.street}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputCity">City</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCity"
            placeholder="City"
            name="city"
            value={information.city}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPincode">Pincode</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPincode"
            placeholder="Pincode"
            name="pincode"
            value={information.pincode}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control"
            id="exampleInputFile"
            name="images"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
