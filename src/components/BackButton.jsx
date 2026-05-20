import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="back-button-slot">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="Go back to previous page"
      >
        <FaArrowLeft className="back-button-icon" aria-hidden="true" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default BackButton;
