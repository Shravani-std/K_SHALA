import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Main_logo.jpeg";
import Footer from "./Footer";
import BackButton from "../components/BackButton";
import "./LegalPage.css";

const LegalPageLayout = ({ title, intro, children }) => (
  <div className="legal-page">
    <nav className="legal-nav">
      <Link to="/" className="logo">
        <div className="logo-box">
          <img src={logo} alt="K-Shala logo" className="logo-img" />
        </div>
        <div>
          <h2>K-Shala</h2>
          <p>Learn Today, Lead Tomorrow</p>
        </div>
      </Link>
    </nav>

    <main className="legal-main">
      <BackButton />
      <h1>{title}</h1>
      {intro && <p className="legal-intro">{intro}</p>}
      {children}
    </main>

    <Footer />
  </div>
);

export default LegalPageLayout;
