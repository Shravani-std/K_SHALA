import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from "./images/laptopcode.webp";
import sql from "./images/sql.webp";
import ss from "./images/ss.webp";

import React from "react";

import "./OracleDBASyllabus.css";
import BackButton from "../components/BackButton";
import video from "./video/K Shala Oracle DBA Program _1080p_caption.mp4";

const OracleDBASyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png?utm_source=chatgpt.com"
            alt="OracleDBA"/>
          <h2>OracleDBA</h2>
        </div>
        <div className="center-title">
          <h1>Oracle <span>DBA Course Modules</span></h1>
          <p>Master database architecture, administration, backup, recovery, and performance tuning with Oracle Database.</p>
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
        <div className="module-title">MODULE – 1: Database Fundamentals & Oracle Introduction</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Database Basics</h3>
            </div>
            <ul><li>Introduction to Databases</li><li>Types of Databases</li><li>RDBMS Concepts</li><li>DBMS vs RDBMS</li><li>Database Architecture</li><li>Tables, Rows & Columns</li><li>Primary Key & Foreign Key</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Oracle Introduction</h3>
            </div>
            <ul><li>Introduction to Oracle Database</li><li>Oracle Editions & Versions</li><li>Oracle Database Architecture</li><li>Oracle Instance & Database</li><li>Oracle Memory Structures</li><li>Background Processes</li><li>Oracle User Accounts</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>SQL Fundamentals</h3>
            </div>
            <ul><li>SQL Syntax</li><li>Data Types</li><li>DDL Commands</li><li>DML Commands</li><li>DCL Commands</li><li>TCL Commands</li><li>Constraints</li><li>Operators & Clauses</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={ss} alt="icon" className="card-icon" />
              <h3>Soft Skills</h3>
            </div>
            <ul><li>Communication Skills</li><li>Email Writing</li><li>Resume Preparation</li><li>Interview Skills</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 2: SQL & PL/SQL Programming</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Advanced SQL</h3>
            </div>
            <ul><li>Joins</li><li>Subqueries</li><li>Views</li><li>Indexes</li><li>Sequences</li><li>Synonyms</li><li>Set Operators</li><li>Functions in SQL</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>PL/SQL Programming</h3>
            </div>
            <ul><li>Introduction to PL/SQL</li><li>Variables & Constants</li><li>Conditional Statements</li><li>Loops</li><li>Cursors</li><li>Exception Handling</li><li>Procedures</li><li>Functions</li><li>Packages</li><li>Triggers</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Database Objects</h3>
            </div>
            <ul><li>Tablespaces</li><li>Datafiles</li><li>Control Files</li><li>Redo Log Files</li><li>Archive Log Files</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Database Security</h3>
            </div>
            <ul><li>User Management</li><li>Roles & Privileges</li><li>Profiles</li><li>Password Policies</li><li>Auditing Basics</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 3: Oracle DBA Administration</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Oracle Installation & Configuration</h3>
            </div>
            <ul><li>Oracle Installation on Linux/Windows</li><li>Database Creation</li><li>Listener Configuration</li><li>Network Configuration</li><li>Oracle Enterprise Manager</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Database Administration</h3>
            </div>
            <ul><li>Startup & Shutdown Database</li><li>Managing Tablespaces</li><li>Managing Users</li><li>Managing Schema Objects</li><li>Managing Undo Data</li><li>Managing Redo Logs</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Backup & Recovery</h3>
            </div>
            <ul><li>Backup Concepts</li><li>RMAN Basics</li><li>Cold Backup</li><li>Hot Backup</li><li>Recovery Techniques</li><li>Flashback Technology</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Performance Tuning Basics</h3>
            </div>
            <ul><li>Introduction to Performance Tuning</li><li>Wait Events</li><li>AWR Reports</li><li>ADDM Reports</li><li>SQL Tuning Basics</li><li>Index Tuning</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 4: Advanced Oracle DBA</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Advanced Administration</h3>
            </div>
            <ul><li>ASM (Automatic Storage Management)</li><li>Oracle RAC Basics</li><li>Data Guard Concepts</li><li>Cloning Databases</li><li>Patching & Upgrades</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Monitoring & Troubleshooting</h3>
            </div>
            <ul><li>Alert Logs</li><li>Trace Files</li><li>Troubleshooting Database Issues</li><li>Space Management</li><li>Session Monitoring</li><li>Lock Management</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Linux for DBA</h3>
            </div>
            <ul><li>Linux Commands</li><li>File Permissions</li><li>Shell Scripting Basics</li><li>Cron Jobs</li><li>User Management in Linux</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Automation & Tools</h3>
            </div>
            <ul><li>OEM Monitoring</li><li>SQL Developer</li><li>TOAD Tool Basics</li><li>Automation Scripts</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 5: Cloud & Modern DBA Concepts</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Cloud Database Concepts</h3>
            </div>
            <ul><li>Introduction to Cloud Computing</li><li>Oracle Cloud Basics</li><li>Database as a Service (DBaaS)</li><li>Cloud Backup & Recovery</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>DevOps for DBA</h3>
            </div>
            <ul><li>CI/CD Basics</li><li>Version Control with Git</li><li>Database Deployment Concepts</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Data Migration</h3>
            </div>
            <ul><li>Export & Import</li><li>Data Pump Utility</li><li>Database Migration Techniques</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={sql} alt="icon" className="card-icon" />
              <h3>Real-Time Projects</h3>
            </div>
            <ul><li>Banking Database Administration</li><li>Healthcare Database Management</li><li>E-Commerce Database Support</li></ul>
          </div>
        </div>
      </div>

      <div className="internship-wrapper">
      <div className="module-badge">MODULE - 6 to MODULE - 7</div>
      {/* <img src={leftbulding} alt="building" className="left-building" /> */}
      <div className="internship-content">
        <div className="icon-circle">💼</div>
        <h1>Onsite Internship & Real-Time Training</h1>
        <ul>
          <li>Live Database Administration</li><li>Backup & Recovery Practice</li><li>Performance Monitoring</li><li>Real-Time Issue Handling</li><li>Client Communication</li><li>Documentation Practice</li><li>Internship Certification</li>
        </ul>
      </div>
      {/* <img src={Certificate} alt="certificate" className="right-certificate" />  */}
    </div>
      
    </div>
  );
};

export default OracleDBASyllabus;