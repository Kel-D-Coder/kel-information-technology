import "../Styles/Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from 'react-icons/fa6'
import { useState } from "react";

export const Navbar = () => {

  const [open, isOpen] = useState(false)
  
  const toggleMenu = () => {
    isOpen(!open)
  }

  return (
    <nav>
      <div className="responsive-Link" id={open ? 'open' : 'close'} >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <Outlet />
      </div>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <Outlet />
      </div>

      <div className="responsive-ham">
        <button style={{ border: "none" }} className="Ham" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};