import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import logo from "./images/logon.webp";
import Footer from "./Footer";
import BackButton from "../components/BackButton";
import "./Home.css";
import "./Contact.css";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const SERVICE_OPTIONS = [
  "Web Development",
  "App Development",
  "AI & Machine Learning",
  "E-Learning Solutions",
  "Software Development",
  "Other",
];

const CONTACT_CARDS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@kshetrapati.info",
    href: "mailto:contact@kshetrapati.info",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 7972657424",
    href: "tel:+917972657424",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "C-103 Ajmera Exotica, Wagholi, Pune.",
    href: null,
  },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const Contact = () => {

  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(`${API_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

    const data = await response.json();

    console.log("Response Data:", data);

    if (response.ok && data.success) {

      setSubmitted(true);

      setForm(initialForm);

      // alert("Message Sent Successfully");

    } else {

      console.error("Backend Validation Error:", data);

      alert(
        data.message ||
        JSON.stringify(data.errors) ||
        "Submission Failed"
      );

    }

  } catch (error) {

    console.error("Frontend Error:", error);

    alert("Server Error");

  }

};

  return (
    <div className="homepage contact-page">
      <nav className="navbar">
        <Link to="/" className="logo contact-logo-link">
          <div className="logo-box">
            <img src={logo} alt="K-Shala logo" className="logo-img" />
          </div>
          <div>
            <h2>K-Shala</h2>
            <p>Learn Today, Lead Tomorrow</p>
          </div>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/servicespage">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="active">Contact</li>
        </ul>
      </nav>

      <main className="contact-main">

  {!submitted ? (

    <>
      <BackButton />

      <section className="contact-hero">
        <h1 className="contact-hero-title">
          Let&apos;s Build Something Extraordinary
        </h1>

        <div
          className="contact-hero-underline"
          aria-hidden="true"
        />
      </section>

      <section className="contact-cards-section">
        <div className="contact-cards-grid">

          {CONTACT_CARDS.map((card) => {

            const Icon = card.icon;

            const content = (
              <>
                <div className="contact-card-icon">
                  <Icon />
                </div>

                <h3 className="contact-card-label">
                  {card.label}
                </h3>

                <p className="contact-card-value">
                  {card.value}
                </p>
              </>
            );

            return card.href ? (

              <a
                key={card.label}
                href={card.href}
                className="contact-info-card"
              >
                {content}
              </a>

            ) : (

              <article
                key={card.label}
                className="contact-info-card"
              >
                {content}
              </article>

            );

          })}

        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-panel">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

            </div>

            <div className="contact-form-row">

              <div className="contact-field">
                <label htmlFor="contact-company">
                  Company
                </label>

                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">
                  Phone
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                />
              </div>

            </div>

            <div className="contact-form-row contact-form-row--single">

              <div className="contact-field contact-field--full">

                <label htmlFor="contact-service">
                  Service Interest
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {SERVICE_OPTIONS.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}

                </select>

              </div>

            </div>

            <div className="contact-form-row contact-form-row--single">

              <div className="contact-field contact-field--full">

                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />

              </div>

            </div>

            <div className="contact-form-actions">

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>
      </section>
    </>

  ) : (

    <section className="enrollment-success-section">

      <div className="enrollment-success-card">

        <div className="success-icon-glow">
          <div className="success-icon" />
        </div>

        <h1>Message Sent Successfully</h1>

        <p>
          Thank you for contacting us. Our team
          will reach out shortly.
        </p>

        <Link
  to="/servicespage"
  className="success-theme-btn"
>
  Back to Services
</Link>

      </div>

    </section>

  )}

</main>

      <Footer />
    </div>
  );
};

export default Contact;
