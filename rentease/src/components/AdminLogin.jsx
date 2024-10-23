/* eslint-disable no-unused-vars */
import React from "react";
import "./AdminLogin.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function AdminLogin(props) {
  let navigate= useNavigate();
  const [isVisible, setIsVisble] = useState(true);
  const handleClose = () => {
    setIsVisble(false);
  }
  const [credentials, setCredentials] = useState({ email:"", password:""})
  const handleSubmit = async(e) => {
    e.preventDefault();
    const  response =  await fetch("http://localhost:5000/api/loginuser",{
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password} )
  });
  const data=await response.json()
  console.log(data);

  if(!data.success) {
    alert("Enter valid credentials")
  }
  if(data.success) {
    navigate('/');
  }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  if(!isVisible) {
    navigate("/");
  }
  return (
    <>
    <Navbar/>
      <div>
        <form className="login_form" onSubmit ={handleSubmit}>
        <h2 className = "login_heading">Log In </h2>
        <div className="Cancel">
        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>x</button>
      </div>
          <div className="form-group">
            <label className= "Text" htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1 "
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label className= "Text" htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1 "
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
          </div>
          <div>
          <Link to='/AdminRegister'>Forgot Password</Link>
          </div>
          <div className = "login_buttons">
          {/* <button type="submit" className="btn1 btn btn-primary">
            Submit
          </button> */}
          <button type="submit" className="btn btn1 p-2 btn-primary">submit</button>
          <Link to="/AdminRegister" ><button className="btn1 btn p-2 btn-danger">SignUp</button></Link>
          </div>
        </form>
      </div>
    </>
  );
}


