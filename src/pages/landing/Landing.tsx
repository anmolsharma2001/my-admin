// import React from "react";

// import "./landing.scss";
// import { Link } from "react-router-dom";
// import LandingNavbar from "../landingNavbar/LandingNavbar";
// import LandingFooter from "../landingFooter/LandingFooter";

// const Landing: React.FC = () => {
//   return (
//     <div className="landing">
//       <LandingNavbar />

//       <main className="landing-content">
//         <section className="hero">
//           <h1>Welcome to Dairy Management</h1>
//           <p>Manage your dairy business smartly and efficiently 🚀</p>
//           <div className="cta-buttons">
            
//             {/* <Link to="/login" className="btn secondary">
//               Login
//             </Link> */}
//           </div>
//         </section>
//       </main>

//       <LandingFooter />
//     </div>
//   );
// };

// export default Landing;


import React from "react";
import { Link } from "react-router-dom";
import LandingNavbar from "../landingNavbar/LandingNavbar";
import LandingFooter from "../landingFooter/LandingFooter";
import "./landing.scss";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <LandingNavbar />

      <main className="landing-content">
        <section className="hero">
          <div className="hero-text">
            <h1 className="fade-in">
              Welcome to <span>Dairy Management</span>
            </h1>
            <p className="slide-up">
              Manage your dairy business smartly and efficiently 🚀
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn primary">
                Get Started
              </Link>
              <Link to="/login" className="btn secondary">
                Login
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default Landing;


