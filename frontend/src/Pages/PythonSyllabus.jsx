import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from "./images/laptopcode.webp";
import pl from "./images/pl.webp";

import React from "react";

import "./PythonSyllabus.css";
import BackButton from "../components/BackButton";

const PythonSyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png?utm_source=chatgpt.com"
            alt="Python"/>
          <h2>Python</h2>
        </div>
        <div className="center-title">
          <h1>Python <span>Syllabus</span></h1>
          <p>Learn Python programming, Django, Flask, Data Science and ML with real-world projects.</p>
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
              <h3>Basic Fundamental</h3>
            </div>
            <ul><li>Introduction to Python</li><li>Variables and Simple Data Types</li><li>Introducing & Working with Lists</li><li>if Statements</li><li>Dictionaries</li><li>User Input and while Loops</li><li>Functions</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Classes</h3>
            </div>
            <ul><li>Intro to object-oriented programming</li><li>Creating and using classes</li><li>Working with instances</li><li>Inheritance and polymorphism</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Files and Exceptions</h3>
            </div>
            <ul><li>Reading from and writing to files</li><li>Working with different file types (text, CSV, JSON)</li><li>Basic exception handling</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 2</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Advanced Topics</h3>
            </div>
            <ul><li>Tuples, sets</li><li>Advanced list and dictionary comprehensions</li><li>Advanced Functions</li><li>Exception Handling and Debugging</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>NumPy & Pandas</h3>
            </div>
            <ul><li>Working with arrays, operations</li><li>Mathematical functions, Indexing and slicing</li><li>Broadcasting, Linear algebra operations</li><li>Data Frames and Series</li><li>Data cleaning, merging and joining</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>TensorFlow</h3>
            </div>
            <ul><li>Introduction to TensorFlow</li><li>Building and training neural networks</li><li>TensorFlow Datasets and data pipelines</li><li>Model evaluation and deployment</li><li>Computer vision and NLP</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>PyTorch</h3>
            </div>
            <ul><li>Introduction to PyTorch</li><li>Building and training neural networks</li><li>Using PyTorch datasets and dataloaders</li><li>Model evaluation and deployment</li><li>Computer vision and NLP</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 3</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Web Fundamentals</h3>
            </div>
            <ul><li>Understanding the Web</li><li>How the web works: Browsers, HTTP, servers</li><li>HTML Fundamentals</li><li>CSS Fundamentals (Box model, Flexbox, Grid)</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>JavaScript Basics</h3>
            </div>
            <ul><li>Getting Started with JavaScript</li><li>Variables, data types, operators</li><li>Control structures, loops, functions, scope</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>DOM & Events</h3>
            </div>
            <ul><li>The Document Object Model (DOM)</li><li>Selecting and modifying elements</li><li>Event handling and basic animations</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Project Work</h3>
            </div>
            <ul><li>Planning and designing a simple website</li><li>Implementing using HTML, CSS, JavaScript</li></ul>
          </div>
        </div>
      </div>
      <div className="module-wrapper">
        <div className="module-title">MODULE - 4</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Flask</h3>
            </div>
            <ul><li>Setting up a Flask application</li><li>Routing and view functions</li><li>Templates and Jinja2</li><li>Handling forms and requests</li><li>Connecting to databases, Creating APIs</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Django</h3>
            </div>
            <ul><li>Setting up a Django project</li><li>Models and ORM</li><li>Views and templates</li><li>Forms and validation</li><li>Authentication and authorization</li><li>Admin interface</li><li>Building REST APIs with Django Rest Framework</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>FastAPI</h3>
            </div>
            <ul><li>Setting up a FastAPI project</li><li>Creating endpoints</li><li>Path and query parameters</li><li>Request validation</li><li>Async programming with FastAPI</li><li>Integrating with databases</li><li>Dependency injection</li></ul>
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

export default PythonSyllabus;
