import React from "react";

const LandingFooter: React.FC = () => {
  return (
    <footer className="landing-footer">
      <p>© {new Date().getFullYear()} Dairy Management. All rights reserved.</p>
    </footer>
  );
};

export default LandingFooter;
