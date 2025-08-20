import React from "react";
import { Link } from "react-router-dom";
import "./landingNavbar.scss"

const LandingNavbar: React.FC = () => {
  return (
    <nav className="landing-navbar">
      <div className="logo">Dairy Management</div>
      <ul className="navItems">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="cta-buttons">
          <Link to="/signup" className="btn primary">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
