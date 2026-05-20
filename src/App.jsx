import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalDotGrid from "./components/GlobalDotGrid";

const Home = lazy(() => import("./Pages/Home"));
const JavaFullStackSyllabus = lazy(() => import("./Pages/JavaFullStackSyllabus"));
const OracleDBASyllabus = lazy(() => import("./Pages/OracleDBASyllabus"));
const AppSupportSyllabus = lazy(() => import("./Pages/AppSupportSyllabus"));
const LinuxAdminSyllabus = lazy(() => import("./Pages/LinuxAdminSyllabus"));
const OracleSQLSyllabus = lazy(() => import("./Pages/OracleSQLSyllabus"));
const SoftwareTestingSyllabus = lazy(() => import("./Pages/SoftwareTestingSyllabus"));
const DotNetSyllabus = lazy(() => import("./Pages/DotNetSyllabus"));
const PythonSyllabus = lazy(() => import("./Pages/PythonSyllabus"));
const ServicesPage = lazy(() => import("./Pages/ServicesPage"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./Pages/TermsConditions"));
const Support = lazy(() => import("./Pages/Support"));
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const EnrollmentPage = lazy(() => import("./pages/EnrollmentPage"));


function App() {
  return (
    <div className="App">
      <div className="bg-anim-layer" aria-hidden="true">
        <GlobalDotGrid />
      </div>

      <div className="app-content">
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicespage" element={<ServicesPage />} />
            <Route path="/javafullstacksyllabus" element={<JavaFullStackSyllabus />} />
            <Route path="/oracledbasyllabus" element={<OracleDBASyllabus />} />
            <Route path="/appsupportsyllabus" element={<AppSupportSyllabus />} />
            <Route path="/linuxadminsyllabus" element={<LinuxAdminSyllabus />} />
            <Route path="/oraclesqlsyllabus" element={<OracleSQLSyllabus />} />
            <Route path="/softwaretestingsyllabus" element={<SoftwareTestingSyllabus />} />
            <Route path="/dotnetsyllabus" element={<DotNetSyllabus />} />
            <Route path="/pythonsyllabus" element={<PythonSyllabus />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/enroll" element={<EnrollmentPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
