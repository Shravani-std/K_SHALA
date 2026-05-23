
import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from './images/laptopcode.webp';
import pl from './images/pl.webp';
import sql from './images/sql.webp';
import ss from './images/ss.webp';
import cv from './images/cv.webp';
import cu from './images/cu.webp';
import ap from './images/ap.webp';
import au from './images/au.webp';
import mp from './images/mp.webp';
import adj from './images/adj.webp';
import rwp from './images/rwp.webp';
import ppa from './images/ppa.webp';
import React from "react";

import "./JavaFullStackSyllabus.css";
import BackButton from "../components/BackButton";


const JavaFullStackSyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
            alt="Java"/>

          <h2>Java</h2>
        </div>

        <div className="center-title">
          <h1>
            Java Full Stack <span>Syllabus</span>
          </h1>

          <p>
            Complete industry-oriented Full Stack Java training program
            with UI technologies, databases, projects, aptitude, and internship.
          </p>

        </div>

        <div className="right-image">
            <img
            src={laptopcode}
            alt="Coding"/>

        </div>

      </div>

      <div className="module-wrapper">

        <div className="module-title">
          MODULE - 1
        </div>

        <div className="cards-row">
          <div className="card programming-card">
            <div className="card-heading">
              <img  src={pl} alt="Programming" className="card-icon"/>

              <h3>Programming Fundamentals</h3>
            </div>

            <ul>
              <li>Introduction to programming languages</li>
              <li>Data Types, Variables, Arrays, Strings & Operators</li>
              <li>Control statements & Looping statements</li>
              <li>Functions, File handling</li>
              <li>Data structure overview</li>
            </ul>

          </div>

          <div className="card  sql-card">

            <div className="card-heading">
              <img src={sql} alt="icon"  className="card-icon"  />
              <h3>SQL</h3>
            </div>

            <ul>
              <li>Syntax, Data types, Operators</li>
              <li>DDL, DML, DCL</li>
              <li>Constraints</li>
              <li>Clause, Keys, Functions</li>
              <li>SQL Joins</li>
            </ul>

          </div>

          <div className="card  softskill-card">

            <div className="card-heading">
              <img  src={ss} alt="icon" className="card-icon" />
              <h3>Soft Skill</h3>
            </div>

            <ul>
              <li>Communication skills</li>
              <li>Group discussion</li>
              <li>Writing skills</li>
              <li>Interview skills</li>
              <li>Resume writing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">

        <div className="module-title">
          MODULE - 2
        </div>

        <div className="cards-row">
          <div className="card core-java">
            <div className="card-heading">
              <img src={cv} alt="icon"  className="card-icon"  />
              <h3>Core Java</h3>
            </div>

            <ul>
              <li>Introduction to Java</li>
              <li>Data Types, Variables, Strings, Operators</li>
              <li>Control & Looping statements</li>
              <li>OOP's – Class, Object, Inheritance</li>
              <li>Polymorphism, Abstraction, Encapsulation</li>
            </ul>

          </div>

          <div className="card core-ui">
            <div className="card-heading">
              <img src={cu} alt="icon" className="card-icon" />
              <h3>Core UI</h3>
            </div>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java Script</li>
              <li>Boot Strap</li>
              <li>J Query</li>
            </ul>

          </div>

          <div className="card aptitude">
            <div className="card-heading">
              <img  src={ap} alt="icon"  className="card-icon"   />
              <h3>Aptitude</h3>
            </div>

            <ul>
              <li>Number system & percentages</li>
              <li>Profit & Loss</li>
              <li>Simple & Compound Interest</li>
              <li>Ratio & Proportion</li>
              <li>Time And Work</li>
              <li>Probability & Geometry</li>
              <li>Puzzle Based Problems</li>
            </ul>

          </div>
        </div>
      </div>


      <div className="module-wrapper">

        <div className="module-title">
          MODULE - 3
        </div>

        <div className="cards-row">
          <div className="card Core-Java3">
            <div className="card-heading">
               <img src={cv} alt="icon" className="card-icon" />
              <h3>Core Java</h3>
            </div>

            <ul>
              <li>String class</li>
              <li>Collection Framework</li>
              <li>Exception Handling</li>
              <li>Multithreading</li>
              <li>JDBC</li>
              <li>Hibernate</li>
            </ul>

          </div>

          <div className="card Advance-UI">
            <div className="card-heading">
               <img src={au} alt="icon" className="card-icon"  />
              <h3>Advance UI</h3>
            </div>

            <ul>
              <li>React</li>
              <li>Angular</li>
            </ul>

          </div>

          <div className="card Mini-Projects">
            <div className="card-heading">
               <img src={mp}  alt="icon" className="card-icon" />
              <h3>Mini Projects</h3>
            </div>

            <ul>
              <li>Student Management System</li>
              <li>Product Inventory Management System</li>
            </ul>

          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">
          MODULE - 4
        </div>

        <div className="cards-row">

          <div className="card Advance-Java">

            <div className="card-heading">
               <img src={adj} alt="icon"  className="card-icon" />
              <h3>Advance Java</h3>
            </div>

            <ul>
              <li>J2EE – JSP, Servlet</li>
              <li>Spring Core</li>
              <li>Spring MVC</li>
              <li>Spring Boot</li>
            </ul>

          </div>

          <div className="card Real-World-Projects">
            <div className="card-heading">
              <img src={rwp}  alt="icon"  className="card-icon" />
              <h3>Real World Projects</h3>
            </div>

            <ul>
              <li>Insurance Management System</li>
              <li>Loan Granting System</li>
            </ul>

          </div>

          <div className="card Pre-Placement-Activities">
            <div className="card-heading">
               <img src={ppa}  alt="icon" className="card-icon" />
              <h3>Pre-Placement Activities</h3>
            </div>

            <ul>
              <li>CV Preparation</li>
              <li>Interview preparation</li>
              <li>Group Discussion</li>
            </ul>

          </div>
        </div>
      </div>
      <div className="internship-wrapper">

      <div className="module-badge">
        MODULE - 5 to MODULE - 7
      </div>

      <img src={leftbulding} alt="building" className="left-building" />
 
      <div className="internship-content">
        <div className="icon-circle">
          💼
        </div>

        <h1>Onsite Internship</h1>

        <p>
          Hands-on real-time company internship with live projects,
          teamwork, deployment, client communication and practical exposure.
        </p>

      </div>

      <img src={Certificate} alt="certificate" className="right-certificate" /> 
    </div>
      
    </div>
  );
};

export default JavaFullStackSyllabus;