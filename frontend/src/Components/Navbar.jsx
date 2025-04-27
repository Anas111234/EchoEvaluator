import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faCircleInfo,
  faEarthAmericas,
  faBookOpen,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import "../Styling/Nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const { authState, logout, loading } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleRestrictedNavigation = (e, route) => {
    if (!authState.token) {
      e.preventDefault();
      setShowModal(true);
    } else {
      navigate(route);
    }
  };

  const closeLoginModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
    navigate("/");
  };

  if (loading) {
    // Prevent flicker on initial load by showing a loading indicator
    return <div className="navbar">Loading...</div>;
  }

  return (
    <div className="navbar">
      {/* Login Required Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="modal-icon"
            />
            <p>You need to log in to access this feature!</p>
            <button onClick={closeLoginModal} className="modal-close-btn">
              Login Now
            </button>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="modal-icon"
            />
            <p>Are you sure you want to logout?</p>
            <div className="modal-buttons">
              <button onClick={confirmLogout} className="modal-confirm-btn">
                Yes, Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="modal-cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logo Section */}
      <div className="nav-logo">
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className="bar-icon"
          onClick={toggleMenu}
        />
        <p className="logo">EchoEvaluator</p>
      </div>

      {/* Navigation Links */}
      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-list active" : "nav-list")}
        >
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-list active" : "nav-list")}
        >
          <FontAwesomeIcon icon={faCircleInfo} className="nav-icon" />
          About
        </NavLink>
        <NavLink
          to="/learnmore"
          className={({ isActive }) => (isActive ? "nav-list active" : "nav-list")}
        >
          <FontAwesomeIcon icon={faBookOpen} className="nav-icon" />
          Learn More
        </NavLink>
        <NavLink
          to="/footprintcalc"
          className={({ isActive }) =>
            isActive ? "nav-list active footprint" : "nav-list footprint"
          }
          onClick={(e) => handleRestrictedNavigation(e, "/footprintcalc")}
        >
          <FontAwesomeIcon icon={faEarthAmericas} className="nav-icon" />
          FootprintCalc
        </NavLink>
      </div>

      {/* Auth Links */}
      <div className="nav-register">
        {authState.token ? (
          <>
            <span className="user-welcome">
              Welcome, {authState.user?.firstname || "User"}!
            </span>
            <button
              onClick={() => setShowLogoutModal(true)}
              className="logout-btn"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/signup" className="signup">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="login">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
