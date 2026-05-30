import React from "react";
import LegalPageLayout from "./LegalPageLayout";

const PrivacyPolicy = () => (
  <LegalPageLayout title="Privacy Policy">
    <section className="legal-section">
      <h2>1. Introduction</h2>
      <p>
        K-Shala, we are committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website, use our
        e-learning platform, or purchase our software products. Please read this
        privacy policy carefully. If you do not agree with the terms of this
        privacy policy, please do not access the platform or use our services.
      </p>
    </section>

    <section className="legal-section">
      <h2>2. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, billing address, payment information, and any other information
          you provide during registration or purchase.
        </li>
        <li>
          <strong>Account Information:</strong> Username, password, and any
          profile information you provide.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with
          our platform, including access times, pages viewed, and actions taken
          within the platform.
        </li>
        
        <li>
          <strong>Cookies and Tracking Technologies:</strong> We use cookies and
          similar tracking technologies to enhance user experience and analyze
          usage patterns.
        </li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and manage your account.</li>
        <li>Facilitate e-learning activities and software use.</li>
        <li>Process transactions and send related information.</li>
        <li>Personalize your experience.</li>
        <li>Improve our platform and services.</li>
        <li>Communicate updates and promotions.</li>
        <li>Ensure legal compliance.</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>4. How We Share Your Information</h2>
      <ul>
        <li>Service Providers</li>
        <li>Business Transfers</li>
        <li>Legal Requirements</li>
        <li>Protection of Rights</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>5. Your Choices and Rights</h2>
      <ul>
        <li>Access and Correction</li>
        <li>Data Portability</li>
        <li>Opt-Out</li>
        <li>Cookies</li>
      </ul>
    </section>

    <section className="legal-section">
      <h2>6. Data Security</h2>
      <p>
        We implement reasonable security measures to protect your personal
        information.
      </p>
    </section>

    <section className="legal-section">
      <h2>7. Data Retention</h2>
      <p>
        We retain your personal information as required for services and legal
        obligations.
      </p>
    </section>

    <section className="legal-section">
      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Our services are not directed to individuals under 13 years old.
      </p>
    </section>

    <section className="legal-section">
      <h2>9. Changes to This Privacy Policy</h2>
      <p>We may update this privacy policy periodically.</p>
    </section>

    <section className="legal-section legal-contact">
      <h2>10. Contact Us</h2>
      <p>K-Shala</p>
      <p>Office 102 Tower B1 VBC Wagholi Pune 412207</p>
      <p>
        <a href="mailto:contact@k-shala.com">contact@k-shala.com</a>
      </p>
      <p>
        <a href="tel:++91 8424067972">+91 8424067972</a>
      </p>
    </section>
  </LegalPageLayout>
);

export default PrivacyPolicy;
