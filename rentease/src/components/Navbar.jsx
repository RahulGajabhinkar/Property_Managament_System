/* eslint-disable no-unused-vars */
import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Navbar(props) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/AdminRegister")
  }
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
        
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-light" href="/settled">StayEase</a>
          {/* <Link to="/AdminRegister" ><button className="btn btn2 btn-danger">SignUp</button></Link> */}
          <div>
           <button className='btn btn0 btn-dark'onClick={handleClick}>Get Started</button>
          </div>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dashboard</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/AdminRegister">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/AdminLogin">Properties</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/pending" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Payments
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/settled">settled Payments</a></li>
                    <li><a className="dropdown-item" href="/settled">Upcoming Payments</a></li>
                    <li><a className="dropdown-item" href="/settled">Due Payments</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Issues
                  </a>
                  <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/pending">Pending Issues</a></li>
                    <li><a className="dropdown-item" href="settled">settled Issues</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}


// import React from 'react';

// export default function Navbar({ onGetStartedClick }) {
//   return (
//     <nav>
//       <div className="nav-links">
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/contact">Contact</a>
//         <button onClick={onGetStartedClick} className="btn btn-primary">
//           Get Started
//         </button>
//       </div>
//     </nav>
//   );
// }
