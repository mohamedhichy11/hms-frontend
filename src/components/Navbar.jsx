import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/user/patient/logout`,
        { withCredentials: true }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
      navigateTo("/login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Logout failed");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* LOGO */}
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">🏥</div>
          <div className="nav-logo-text">
            <span className="nav-logo-title">Tanger Medical</span>
            <span className="nav-logo-sub">CLINICS</span>
          </div>
        </Link>

        {/* LINKS */}
        <div className={`nav-links ${show ? "show" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setShow(false)}>Home</Link>
          <Link to="/appointment" className="nav-link" onClick={() => setShow(false)}>Appointment</Link>
          <Link to="/about" className="nav-link" onClick={() => setShow(false)}>About Us</Link>
          {isAuthenticated && (
            <Link to="/profile" className="nav-link" onClick={() => setShow(false)}>Profile</Link>
          )}
        </div>

        {/* ACTIONS */}
        <div className="nav-actions">
          <span className="nav-badge">● Available 24/7</span>
          {isAuthenticated ? (
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="btn-login" onClick={() => navigateTo("/login")}>Login</button>
          )}
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
