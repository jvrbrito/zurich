// import React from 'react'
// import { useState } from 'react'
// import Logo from "../assets/zurichlogo.png"
// import {Link} from "react-router-dom"
// import "../styles/Navbar.css"
// import ReorderIcon from '@mui/icons-material/Reorder';

// function Navbar() {

//     const [openLinks, setOpenLinks] = useState(false);
//     const toggleNavbar= ()=> {
//         setOpenLinks(!openLinks)
//     }

//   return (
//     <div className='navbar'>
//       <div className='leftSide' id={openLinks ? "open" : "close"}>
//         <img className='logo' src={Logo}/>
//         <div className='hiddenLinks'>
//         <Link to="/">Home</Link>
//         <Link to="/collection">Collection</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         </div>
//       </div>
//       <div className='rightSide'>
//         <Link to="/">Home</Link>
//         <Link to="/collection">Collection</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <button onClick={toggleNavbar}>
//         <ReorderIcon/>
//         </button>
//         </div>
//     </div>
//   );
// }

// export default Navbar



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/zurichlogo.png"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img className='logo' src={Logo}/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/collection"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Collection
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;