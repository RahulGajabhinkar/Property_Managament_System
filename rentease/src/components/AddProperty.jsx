import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProperty.css';

export default function AddProperty({ onClose }) {
  const [information, setInformation] = useState({
    landmark: '',
    street: '',
    city: '',
    pincode: ''
  });
  let navigate = useNavigate();

  const handleClose = () => {
    onClose();  // Call the onClose function passed from the parent component (Profile)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/addproperty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(information),
    });
    const data = await response.json();
    // Handle the response as needed
  };

  const onChange = (e) => {
    setInformation({ ...information, [e.target.name]: e.target.value });
  };

  return (
    <div className="blur-background">
      <form onSubmit={handleSubmit}>
        <div className="Cancel">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}  // Close the modal on click
          >
            &times;  {/* Close character */}
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLandMark">LandMark</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLandMark"
            placeholder="landmark"
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
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
