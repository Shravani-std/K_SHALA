import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-overlay">
      <p>
  © {new Date().getFullYear()} – LEARN TODAY, LEAD TOMORROW. ALL RIGHTS RESERVED
</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <Link to="/support">Support</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
