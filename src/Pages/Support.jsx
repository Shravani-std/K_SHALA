import React from "react";
import LegalPageLayout from "./LegalPageLayout";

const Support = () => (
  <LegalPageLayout
    title="Support Center"
    intro="Welcome to the Kshetrapati Industries Pvt Ltd Support Center. We're here to help you make the most of our e-learning platform and software solutions."
  >
    <section className="legal-section">
      <h2>1. Getting Started</h2>
      <ul>
        <li>What We Offer</li>
        <li>Creating an Account</li>
        <li>Navigating the Platform</li>
        <li>E-learning Platform Guide</li>
        <li>Software Setup</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>2. Frequently Asked Questions (FAQs)</h2>

      <h3>Account and Billing</h3>
      <ul>
        <li>How do I reset my password?</li>
        <li>How do I update billing information?</li>
        <li>Can I cancel subscription?</li>
      </ul>

      <h3>Courses and Learning</h3>
      <ul>
        <li>Accessing course materials</li>
        <li>Live session issues</li>
        <li>Certificates</li>
      </ul>

      <h3>Software</h3>
      <ul>
        <li>Installation help</li>
        <li>Crash troubleshooting</li>
        <li>Mobile version</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>3. Troubleshooting</h2>
      <ul>
        <li>Login Problems</li>
        <li>Payment Errors</li>
        <li>Course Access Issues</li>
        <li>Software Crashes</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>4. User Guides and Tutorials</h2>
      <ul>
        <li>Course Enrollment Tutorial</li>
        <li>Interactive Features</li>
        <li>Tracking Learning Progress</li>
        <li>User Manual</li>
        <li>Feature Tutorials</li>
        <li>Best Practices</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>5. Community Support</h2>
      <ul>
        <li>User Forums</li>
        <li>Instructor Discussions</li>
        <li>Webinars</li>
        <li>Live Q&amp;A Sessions</li>
      </ul>
    </section>

    <section className="legal-section legal-contact">
      <h2>6. Contact Us</h2>
      <p>
        Email:{" "}
        <a href="mailto:contact@kshetrapati.info">contact@kshetrapati.info</a>
      </p>
      <p>
        Phone: <a href="tel:+917972657424">+91 7972657424</a>
      </p>
    </section>

    <section className="legal-section">
      <h2>7. Resources and Documentation</h2>
      <ul>
        <li>Installation Files</li>
        <li>PDF Guides</li>
        <li>API Documentation</li>
        <li>Knowledge Base</li>
        <li>Popular Articles</li>
      </ul>
    </section>
  </LegalPageLayout>
);

export default Support;
