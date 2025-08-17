import React from "react";
import { Link } from "react-router-dom";

const LandingNavbar: React.FC = () => {
  return (
    <nav className="landing-navbar">
      <div className="logo">🐄 DairyApp</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login" className="btn">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LandingNavbar;
