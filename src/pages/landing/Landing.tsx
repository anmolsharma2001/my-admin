import React from "react";

import "./landing.scss";
import { Link } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <LandingNavbar />

      <main className="landing-content">
        <section className="hero">
          <h1>Welcome to Dairy Management</h1>
          <p>Manage your dairy business smartly and efficiently 🚀</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn primary">
              Register
            </Link>
            <Link to="/login" className="btn secondary">
              Login
            </Link>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default Landing;
