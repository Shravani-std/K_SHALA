import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from "./images/laptopcode.webp";
import pl from "./images/pl.webp";

import React from "react";

import "./AppSupportSyllabus.css";
import BackButton from "../components/BackButton";

const AppSupportSyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
            alt="AppSupport"/>
          <h2>AppSupport</h2>
        </div>
        <div className="center-title">
          <h1>Application <span>& Production Support</span></h1>
          <p>Gain expertise in maintaining, troubleshooting, and supporting enterprise applications in production environments.</p>
        </div>
        <div className="right-image">
            <img src={laptopcode} alt="Coding"/>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 1: IT Fundamentals & Production Support Basics</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Computer & IT Fundamentals</h3>
            </div>
            <ul><li>Introduction to Computers</li><li>Operating System Basics</li><li>Client-Server Architecture</li><li>Networking Fundamentals</li><li>Internet & Web Technologies</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Production Support Introduction</h3>
            </div>
            <ul><li>Introduction to Application Support</li><li>Roles & Responsibilities of Support Engineer</li><li>L1, L2 & L3 Support</li><li>ITIL Fundamentals</li><li>Incident, Problem & Change Management</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Software Development Basics</h3>
            </div>
            <ul><li>SDLC (Software Development Life Cycle)</li><li>STLC Basics</li><li>Agile Methodology</li><li>Scrum Process</li><li>DevOps Overview</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Communication & Soft Skills</h3>
            </div>
            <ul><li>Email Writing</li><li>Communication Skills</li><li>Escalation Handling</li><li>Interview Preparation</li><li>Resume Building</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 2: Linux, SQL & Monitoring</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Linux for Support Engineers</h3>
            </div>
            <ul><li>Linux Introduction</li><li>File & Directory Commands</li><li>User Management</li><li>Process Management</li><li>File Permissions</li><li>Shell Scripting Basics</li><li>Log File Monitoring</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>SQL for Production Support</h3>
            </div>
            <ul><li>Database Basics</li><li>SQL Syntax</li><li>DDL, DML & DCL Commands</li><li>Joins & Subqueries</li><li>Functions & Constraints</li><li>Database Troubleshooting</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Monitoring & Ticketing Tools</h3>
            </div>
            <ul><li>Jira Tool</li><li>ServiceNow Basics</li><li>Incident Tracking</li><li>SLA Management</li><li>Monitoring Dashboards</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Web & Application Basics</h3>
            </div>
            <ul><li>HTTP & HTTPS</li><li>API Basics</li><li>JSON & XML</li><li>Browser Developer Tools</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 3: Application Support Operations</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Incident Management</h3>
            </div>
            <ul><li>Ticket Lifecycle</li><li>Severity & Priority</li><li>Root Cause Analysis (RCA)</li><li>Escalation Matrix</li><li>Issue Resolution Process</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Problem & Change Management</h3>
            </div>
            <ul><li>Problem Identification</li><li>Change Request Process</li><li>Release Management</li><li>Deployment Support</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Batch Monitoring</h3>
            </div>
            <ul><li>Batch Job Monitoring</li><li>Cron Jobs</li><li>Scheduler Basics</li><li>Failure Handling</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Production Environment Support</h3>
            </div>
            <ul><li>Application Health Check</li><li>Server Monitoring</li><li>Log Analysis</li><li>Downtime Handling</li><li>Support Documentation</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 4: Advanced Production Support</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Cloud & DevOps Basics</h3>
            </div>
            <ul><li>Introduction to Cloud Computing</li><li>AWS Basics</li><li>CI/CD Concepts</li><li>Jenkins Basics</li><li>Docker Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Application Monitoring Tools</h3>
            </div>
            <ul><li>Splunk Basics</li><li>Grafana Introduction</li><li>Kibana Basics</li><li>App Monitoring Concepts</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Middleware & Web Servers</h3>
            </div>
            <ul><li>Apache & Tomcat Basics</li><li>WebLogic Basics</li><li>Application Deployment</li><li>Server Restart Procedures</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Automation Basics</h3>
            </div>
            <ul><li>Shell Script Automation</li><li>Python Basics for Support</li><li>Automation Use Cases</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 5: Real-Time Support & Domain Knowledge</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Banking & Financial Domain</h3>
            </div>
            <ul><li>Banking Application Support</li><li>Payment Gateway Basics</li><li>Transaction Monitoring</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Healthcare & Insurance Domain</h3>
            </div>
            <ul><li>Insurance Application Support</li><li>Healthcare Workflow Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>E-Commerce Domain</h3>
            </div>
            <ul><li>Order Management System</li><li>Inventory & Payment Flow</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Real-Time Support Activities</h3>
            </div>
            <ul><li>Production Issue Handling</li><li>Bridge Calls</li><li>Client Communication</li><li>Shift Handover Process</li><li>Daily Status Reports</li></ul>
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
          <li>Real-Time Application Support</li><li>Incident Resolution Practice</li><li>SQL & Linux Troubleshooting</li><li>Monitoring Dashboard Usage</li><li>Ticket Handling Practice</li><li>Client Interaction</li><li>Agile Team Collaboration</li><li>Internship Certification</li>
        </ul>
      </div>
      <img src={Certificate} alt="certificate" className="right-certificate" /> 
    </div>
      
    </div>
  );
};

export default AppSupportSyllabus;