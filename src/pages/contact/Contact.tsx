import React from "react";
// import "./contact.scss";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required></textarea>
        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
