import leftbulding from "./images/leftBuilding.webp";
import Certificate from "./images/Certificate.webp";
import laptopcode from "./images/laptopcode.webp";
import pl from "./images/pl.webp";
import ss from "./images/ss.webp";

import React from "react";

import "./LinuxAdminSyllabus.css";
import BackButton from "../components/BackButton";

const LinuxAdminSyllabus = () => {
  return (
    <div className="syllabus-container">
      <BackButton />
      <div className="top-section">
        <div className="left-java">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png?utm_source=chatgpt.com"
            alt="LinuxAdmin"/>
          <h2>LinuxAdmin</h2>
        </div>
        <div className="center-title">
          <h1>Linux <span>Administration Course Modules</span></h1>
          <p>Master Linux system administration, shell scripting, networking, security, and server management.</p>
        </div>
        <div className="right-image">
            <img src={laptopcode} alt="Coding"/>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 1: Linux Fundamentals</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Introduction to Linux</h3>
            </div>
            <ul><li>Introduction to Operating Systems</li><li>History of Linux</li><li>Linux Distributions</li><li>Linux Architecture</li><li>Kernel & Shell Concepts</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Linux Installation</h3>
            </div>
            <ul><li>Linux Installation Process</li><li>Partitioning Concepts</li><li>Boot Process</li><li>Dual Boot Configuration</li><li>Virtual Machine Setup</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Basic Linux Commands</h3>
            </div>
            <ul><li>File & Directory Commands</li><li>Navigation Commands</li><li>Viewing File Contents</li><li>Copy, Move & Delete Files</li><li>Search Commands</li><li>Compression & Archiving</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Editors & Utilities</h3>
            </div>
            <ul><li>VI/VIM Editor</li><li>Nano Editor</li><li>File Permissions Basics</li><li>Help Commands</li></ul>
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
        <div className="module-title">MODULE – 2: Linux System Administration</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>User & Group Management</h3>
            </div>
            <ul><li>Creating Users & Groups</li><li>Password Management</li><li>User Profiles</li><li>Sudo Access</li><li>Account Locking & Expiry</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>File System Management</h3>
            </div>
            <ul><li>Linux File System Structure</li><li>Mounting & Unmounting</li><li>Disk Management</li><li>LVM Basics</li><li>Swap Management</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Permissions & Security</h3>
            </div>
            <ul><li>File Permissions</li><li>Ownership & ACL</li><li>Special Permissions</li><li>Firewall Basics</li><li>SELinux Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Process Management</h3>
            </div>
            <ul><li>Process Monitoring</li><li>Foreground & Background Jobs</li><li>Process Priority</li><li>Kill Commands</li><li>System Monitoring Tools</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 3: Networking & Services</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Networking Fundamentals</h3>
            </div>
            <ul><li>IP Addressing</li><li>Subnetting Basics</li><li>Network Configuration</li><li>DNS Concepts</li><li>Routing Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Linux Networking Commands</h3>
            </div>
            <ul><li>ping</li><li>netstat</li><li>traceroute</li><li>ifconfig/ip</li><li>nslookup</li><li>curl & wget</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Server Configuration</h3>
            </div>
            <ul><li>SSH Server</li><li>FTP Server</li><li>Web Server (Apache/Nginx)</li><li>DHCP Server Basics</li><li>DNS Server Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Package Management</h3>
            </div>
            <ul><li>RPM & YUM/DNF</li><li>APT Package Manager</li><li>Repository Management</li><li>Software Installation & Updates</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 4: Shell Scripting & Automation</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Shell Scripting Basics</h3>
            </div>
            <ul><li>Introduction to Shell Scripting</li><li>Variables & Operators</li><li>Conditional Statements</li><li>Loops</li><li>Functions</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Advanced Shell Scripting</h3>
            </div>
            <ul><li>File Handling</li><li>User Input</li><li>Error Handling</li><li>Script Automation</li><li>Cron Jobs & Scheduling</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Log Management</h3>
            </div>
            <ul><li>System Logs</li><li>Log Rotation</li><li>Monitoring Log Files</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Backup & Recovery</h3>
            </div>
            <ul><li>Backup Strategies</li><li>Tar & Rsync</li><li>Recovery Procedures</li></ul>
          </div>
        </div>
      </div>

      <div className="module-wrapper">
        <div className="module-title">MODULE – 5: Advanced Linux Administration</div>
        <div className="cards-row">
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Advanced Administration</h3>
            </div>
            <ul><li>System Performance Tuning</li><li>Resource Monitoring</li><li>Kernel Tuning Basics</li><li>Troubleshooting Linux Issues</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Virtualization & Cloud</h3>
            </div>
            <ul><li>VirtualBox/VMware</li><li>Docker Basics</li><li>Container Concepts</li><li>Cloud Computing Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>Security & Hardening</h3>
            </div>
            <ul><li>Linux Security Best Practices</li><li>SSH Hardening</li><li>Firewall Configuration</li><li>Fail2Ban Basics</li></ul>
          </div>
          <div className="card">
            <div className="card-heading">
              <img src={pl} alt="icon" className="card-icon" />
              <h3>DevOps Basics</h3>
            </div>
            <ul><li>Git & GitHub</li><li>CI/CD Introduction</li><li>Jenkins Basics</li></ul>
          </div>
        </div>
      </div>

      <div className="internship-wrapper">
      <div className="module-badge">MODULE - 6 to MODULE - 7</div>
      <img src={leftbulding} alt="building" className="left-building" />
      <div className="internship-content">
        <div className="icon-circle">💼</div>
        <h1>Real-Time Projects & Internship</h1>
        <ul>
          <li>Live Server Management</li><li>User Administration</li><li>Web Server Deployment</li><li>Network Troubleshooting</li><li>Shell Script Development</li><li>Monitoring & Reporting</li><li>Client Communication</li><li>Internship Certification</li>
        </ul>
      </div>
      <img src={Certificate} alt="certificate" className="right-certificate" /> 
    </div>
      
    </div>
  );
};

export default LinuxAdminSyllabus;