import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from "./images/laptopcode.webp";
import sql from "./images/sql.webp";

import React from "react";

import "./OracleSQLSyllabus.css";
import BackButton from "../components/BackButton";

const OracleSQLSyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="./public/images-removebg-preview.png"
            alt="OracleSQL"/>
          <h2>OracleSQL</h2>
        </div>
        <div className="center-title">
          <h1>Oracle <span>SQL Developer Course Modules</span></h1>
          <p>Learn to design, create, and manage relational databases using advanced SQL queries and PL/SQL programming.</p>
        </div>
        <div className="right-image">
            <img src={laptopcode} alt="Coding"/>
        </div>
      </div>


      <div className="module-wrapper">
        <div className="module-title">MODULE - 1</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Introduction to Databases</h3>
            </div>
            <ul><li>Introduction to DBMS & RDBMS</li><li>Oracle Database Overview</li><li>Database Architecture Basics</li><li>Tables, Rows & Columns</li><li>Primary Key & Foreign Key</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Oracle SQL Developer Introduction</h3>
            </div>
            <ul><li>Installation of Oracle SQL Developer</li><li>SQL Developer Interface</li><li>Database Connection Setup</li><li>Working with Worksheets</li><li>Import & Export Data</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>SQL Fundamentals</h3>
            </div>
            <ul><li>SQL Syntax</li><li>Data Types</li><li>DDL Commands</li><li>DML Commands</li><li>DCL Commands</li><li>TCL Commands</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Soft Skills</h3>
            </div>
            <ul><li>Communication Skills</li><li>Email Writing</li><li>Resume Preparation</li><li>Interview Skills</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 2</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>SQL Clauses & Operators</h3>
            </div>
            <ul><li>WHERE Clause</li><li>ORDER BY</li><li>GROUP BY</li><li>HAVING Clause</li><li>DISTINCT</li><li>Operators in SQL</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Functions in SQL</h3>
            </div>
            <ul><li>Single Row Functions</li><li>Aggregate Functions</li><li>Date Functions</li><li>String Functions</li><li>Numeric Functions</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Joins & Subqueries</h3>
            </div>
            <ul><li>Inner Join</li><li>Left Join</li><li>Right Join</li><li>Full Join</li><li>Self Join</li><li>Subqueries</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Database Objects</h3>
            </div>
            <ul><li>Views</li><li>Indexes</li><li>Sequences</li><li>Synonyms</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 3</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Introduction to PL/SQL</h3>
            </div>
            <ul><li>PL/SQL Architecture</li><li>PL/SQL Blocks</li><li>Variables & Constants</li><li>Operators</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Control Statements</h3>
            </div>
            <ul><li>IF Conditions</li><li>CASE Statements</li><li>Loops (FOR, WHILE)</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Exception Handling</h3>
            </div>
            <ul><li>Types of Exceptions</li><li>User Defined Exceptions</li><li>Exception Handling Techniques</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Cursors & Stored Programs</h3>
            </div>
            <ul><li>Explicit & Implicit Cursors</li><li>Procedures</li><li>Functions</li><li>Packages</li><li>Triggers</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 4</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Database Management</h3>
            </div>
            <ul><li>Table Management</li><li>Constraints Management</li><li>User Management</li><li>Roles & Privileges</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>SQL Developer Features</h3>
            </div>
            <ul><li>Query Builder</li><li>Reports</li><li>Data Modeling Basics</li><li>Debugging PL/SQL</li><li>Export & Import Wizard</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Database Testing</h3>
            </div>
            <ul><li>Data Validation</li><li>Query Optimization Basics</li><li>Performance Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Backup & Recovery Basics</h3>
            </div>
            <ul><li>Export Utility</li><li>Import Utility</li><li>Data Pump Basics</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 5</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Advanced SQL</h3>
            </div>
            <ul><li>Analytical Functions</li><li>Set Operators</li><li>Hierarchical Queries</li><li>MERGE Statement</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Performance Tuning Basics</h3>
            </div>
            <ul><li>Explain Plan</li><li>Index Optimization</li><li>Query Tuning Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Real-Time Projects</h3>
            </div>
            <ul><li>Banking Database Project</li><li>Hospital Management Database</li><li>E-Commerce Database Project</li><li>HR Management System</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Pre-Placement Activities</h3>
            </div>
            <ul><li>Resume Building</li><li>Mock Interviews</li><li>SQL Interview Questions</li><li>HR Interview Preparation</li><li>LinkedIn Profile Optimization</li></ul>
          </div>
        </div>
      </div>

      <div className="internship-wrapper">
      <div className="module-badge">MODULE - 6 to MODULE - 7</div>
      <img src={leftbulding} alt="building" className="left-building" />
      <div className="internship-content">
        <div className="icon-circle">💼</div>
        <h1>Internship & Live Projects</h1>
        <ul>
<li>Live SQL Development</li><li>Real-Time Database Queries</li><li>Database Troubleshooting</li><li>Report Generation</li><li>Team Collaboration</li><li>Client Communication</li><li>Internship Certification</li>
        </ul>
      </div>
      <img src={Certificate} alt="certificate" className="right-certificate" /> 
    </div>
      
    </div>
  );
};

export default OracleSQLSyllabus;
