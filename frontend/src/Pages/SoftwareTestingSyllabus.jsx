import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from "./images/laptopcode.webp";
import adj from "./images/adj.webp";

import React from "react";

import "./SoftwareTestingSyllabus.css";
import BackButton from "../components/BackButton";
import video from "./video/software_testing.mp4";
const SoftwareTestingSyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2881/2881142.png?utm_source=chatgpt.com"
            alt="SoftwareTesting"/>
          <h2>SoftwareTesting</h2>
        </div>
        <div className="center-title">
          <h1>Software <span>Testing Syllabus</span></h1>
          <p>Learn manual testing methodologies and automated testing using Selenium, JUnit, and modern CI/CD tools.</p>
        </div>


           {/* VIDEO */}
          <div className="course-video">
            <video
              autoPlay
              muted
              loop
              controls
              playsInline
            >
              <source
                src={video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>


      </div>


      <div className="module-wrapper">
        <div className="module-title">MODULE - 1</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Programming Fundamentals</h3>
            </div>
            <ul><li>Introduction to Programming Languages</li><li>Data Types, Variables & Operators</li><li>Conditional Statements & Loops</li><li>Functions & Arrays</li><li>File Handling Basics</li><li>Introduction to OOP Concepts</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Software Testing Fundamentals</h3>
            </div>
            <ul><li>Introduction to Software Testing</li><li>SDLC & STLC</li><li>Testing Principles</li><li>Software Defect/Bug Life Cycle</li><li>Verification vs Validation</li><li>QA vs QC</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Types of Testing</h3>
            </div>
            <ul><li>Functional Testing</li><li>Non-Functional Testing</li><li>Smoke & Sanity Testing</li><li>Regression & Retesting</li><li>Integration & System Testing</li><li>UAT</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Soft Skills</h3>
            </div>
            <ul><li>Communication Skills</li><li>Email Writing</li><li>Resume Preparation</li><li>Interview Skills</li><li>Group Discussion</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 2</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Manual Testing</h3>
            </div>
            <ul><li>Requirement Analysis</li><li>Test Scenario Preparation</li><li>Test Case Writing</li><li>Test Data Preparation</li><li>Traceability Matrix</li><li>Defect Reporting & Tracking</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Agile Testing</h3>
            </div>
            <ul><li>Agile Methodology</li><li>Scrum Process</li><li>Sprint Planning</li><li>Daily Stand-up Meetings</li><li>Jira Tool Usage</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>SQL & DB Testing</h3>
            </div>
            <ul><li>SQL Syntax, DDL, DML, DCL</li><li>Clauses, Operators, Joins</li><li>Functions & Constraints</li><li>Database Testing</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Web, API & Aptitude</h3>
            </div>
            <ul><li>Client-Server Architecture</li><li>HTTP & HTTPS, API Basics</li><li>Browser Developer Tools, JSON/XML</li><li>Percentages, Profit & Loss, Logic</li><li>Puzzle Solving</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 3</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Java/Python for Automation</h3>
            </div>
            <ul><li>Introduction to Java/Python</li><li>Variables & Data Types</li><li>OOP Concepts</li><li>Collections</li><li>Exception Handling</li><li>File Handling</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Selenium Automation</h3>
            </div>
            <ul><li>Introduction to Selenium</li><li>Selenium WebDriver</li><li>Locators in Selenium</li><li>Handling Web Elements</li><li>Dropdowns & Alerts</li><li>Frames & Windows</li><li>Waits & Actions</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Frameworks</h3>
            </div>
            <ul><li>TestNG Framework</li><li>Maven Project Setup</li><li>Data-Driven Framework</li><li>Keyword-Driven & Hybrid Framework</li><li>Page Object Model (POM)</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Version Control</h3>
            </div>
            <ul><li>Git Basics</li><li>GitHub Basics</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 4</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>API Testing</h3>
            </div>
            <ul><li>Introduction to API Testing</li><li>REST API Concepts</li><li>Postman Tool</li><li>HTTP Methods (GET, POST, PUT, DELETE)</li><li>Request & Response Validation</li><li>JSON Parsing</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Advanced Automation</h3>
            </div>
            <ul><li>Selenium Grid</li><li>Cross Browser Testing</li><li>Jenkins Basics</li><li>CI/CD Concepts</li><li>Docker Basics for Testing</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Performance Testing</h3>
            </div>
            <ul><li>Introduction to Performance Testing</li><li>Load Testing</li><li>Stress Testing</li><li>JMeter Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={adj} alt="icon" className="card-icon" />
              <h3>Projects & Placement</h3>
            </div>
            <ul><li>Insurance/Banking/E-Commerce App Testing</li><li>Resume Building</li><li>Mock Interviews</li><li>HR Interview Preparation</li></ul>
          </div>
        </div>
      </div>

      <div className="internship-wrapper">
      <div className="module-badge">MODULE - 5 to MODULE - 7</div>
      {/* <img src={leftbulding} alt="building" className="left-building" /> */}
      <div className="internship-content">
        <div className="icon-circle">💼</div>
        <h1>Onsite Internship</h1>
        <ul>
<li>Live Testing Projects</li><li>Real-Time Defect Tracking</li><li>Client Communication</li><li>Agile Team Collaboration</li><li>Automation Script Development</li><li>Test Execution & Reporting</li><li>Internship Certification</li>
        </ul>
      </div>
      {/* <img src={Certificate} alt="certificate" className="right-certificate" />  */}
    </div>
      
    </div>
  );
};

export default SoftwareTestingSyllabus;
