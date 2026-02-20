import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";
import logo from "../assets/logo2.webp";
import "../Styles/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`mainNav ${scrolled ? "scrolled" : ""}`}>
        <div className="brand">
          <NavLink to="/">
            <img src={logo} alt="DevSpectra Logo" />
          </NavLink>
        </div>

        <ul className="navLinks">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/career">Career</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <div className="cta-nav">
          <NavLink to="/contact" className="btn-nav">
            Start a Project
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
