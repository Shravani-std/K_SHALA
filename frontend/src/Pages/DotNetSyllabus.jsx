import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from "./images/laptopcode.webp";
import pl from "./images/pl.webp";

import React from "react";

import "./DotNetSyllabus.css";
import BackButton from "../components/BackButton";

const DotNetSyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="./public/Net-removebg-preview.png"
            alt="DotNet"/>
          <h2>DotNet</h2>
        </div>
        <div className="center-title">
          <h1>DotNet <span>Full Stack Syllabus</span></h1>
          <p>Master C#, ASP.NET Core, MVC, Web API, Entity Framework and modern web applications.</p>
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
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Programming Fundamentals</h3>
            </div>
            <ul><li>Introduction to programming languages</li><li>Data Types, Variables, Arrays, Strings</li><li>Control & Looping statements</li><li>Functions, File Handling</li><li>Data structure overview</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>SQL</h3>
            </div>
            <ul><li>Syntax, Datatypes, Operators</li><li>DDL, DML, DCL</li><li>Constraints, Clauses, Keys, Functions</li><li>SQL Joins</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Soft Skills</h3>
            </div>
            <ul><li>Communication skills</li><li>Group discussion</li><li>Writing skills</li><li>Interview skills</li><li>Resume writing</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 2</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>C#</h3>
            </div>
            <ul><li>Introduction to .Net Framework</li><li>Data Types, Variables, Strings, Operators</li><li>Control & Looping statements</li><li>OOP's – Class, Object, Inheritance, Polymorphism, Abstraction, Encapsulation</li><li>Assembly, Reflection, Globalization, Localization</li><li>LINQ & FAQS</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Core UI</h3>
            </div>
            <ul><li>HTML</li><li>Java Script</li><li>CSS</li><li>Boot Strap</li><li>jQuery</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Aptitude</h3>
            </div>
            <ul><li>Number system, percentages, profit & Loss</li><li>Simple/Compound interest, ratio, proportion</li><li>Time & Work, Speed & Distance</li><li>Permutation, Combination, Probability</li><li>Number Series, Coding Decoding, Puzzles</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 3</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>ADO.NET</h3>
            </div>
            <ul><li>Understanding ADO Libraries and Bases</li><li>System.Data.Db Classes</li><li>Database Connectivity with C#.Net</li><li>Connected and Disconnected Architecture</li><li>Build Data Access Layer in DLL</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Entity Framework</h3>
            </div>
            <ul><li>Difference Between EF & ADO.Net</li><li>ORM Entity Framework Core</li><li>Mapping Entity with Databases</li><li>DML Operations Using Entity Framework</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 4</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>ASP.Net & MVC</h3>
            </div>
            <ul><li>Web Application using ASP.NET</li><li>ASP.NET Architecture</li><li>Working With Web Form Controls</li><li>Working With Grid View, editable grids</li><li>State Management in stateless applications</li><li>ASP.NET MVC Application along with CURD</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Ajax & WebAPI</h3>
            </div>
            <ul><li>Ajax Introduction</li><li>Ajax Server Controls</li><li>Web API</li></ul>
          </div>
        </div>
      </div>

      <div className="internship-wrapper">
      <div className="module-badge">MODULE - 5 to MODULE - 7</div>
      <img src={leftbulding} alt="building" className="left-building" />
      <div className="internship-content">
        <div className="icon-circle">💼</div>
        <h1>Onsite Internship</h1>
        <ul>
<li>Hands-on real-time company internship with live projects</li><li>teamwork, deployment, client communication and practical exposure.</li>
        </ul>
      </div>
      <img src={Certificate} alt="certificate" className="right-certificate" /> 
    </div>
      
    </div>
  );
};

export default DotNetSyllabus;
