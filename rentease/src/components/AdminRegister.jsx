/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./AdminRegister.css"
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
function AdminRegister() {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({name:"", lastname:"", email:"", password:"", contactNo:"", landmark:"", street:"",city:"", pincode:""})
  const handleSubmit = async(e) => {
    e.preventDefault();
    const  response =  await fetch("http://localhost:5000/api/createuser",{
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password, contactNo:credentials.contactNo, landmark:credentials.landmark,street:credentials.street,  city:credentials.city, pincode:credentials.pincode} )
  });
  const data=await response.json()
  console.log(data);
  if(data.success)
    navigate("/AdminLogin")
    
  if(! data.success) {
    alert("User already exists")
  }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <>
    <Navbar/>
      <div className="registerContainer">
        
        <form className = "register_form" onSubmit={handleSubmit}>
        <h2 className = "register_heading"> Register</h2>
          <div className="  form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Name"
              name='name'
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLastName">last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              placeholder="Last Name"
              name='lastname'
              value={credentials.lastname}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputContactNo">Contact Number</label>

            <input
              type="text"
              className="form-control"
              id="exampleInputContactNo"
              placeholder="ContactNo"
              name='contactNo'
              value={credentials.contactNo}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name='email'
              value={credentials.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name='password'
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <h4>Address</h4>
          <div className="form-group">
            <label htmlFor="exampleInputLandMark">LandMark</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLandMark"
              placeholder="landmark"
              name='landmark'
              value={credentials.landmark}
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
              name='street'
              value={credentials.street}
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
              name='city'
              value={credentials.city}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPincode">pincode</label>

            <input
              type="text"
              className="form-control"
              id="exampleInputPincode"
              placeholder="Pincode"
              name='pincode'
              value={credentials.pincode}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn  register_buttons btn-primary">
            Submit
          </button>
          <Link to='/AdminLogin'><button type="button" className="register_buttons btn btn-danger">Already an user</button></Link>
          
        </form>
      </div>
    </>
  );
}

export default AdminRegister;
