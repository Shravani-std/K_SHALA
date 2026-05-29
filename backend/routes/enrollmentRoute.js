const express = require("express");
const router = express.Router();

const Enrollment = require("../db/Enrollment");

// CREATE ENROLLMENT
router.post("/enroll", async (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  try {
    const enrollment = new Enrollment(req.body);

     // ADD THESE LOGS HERE
    console.log("Qualification:", req.body.highestQualification);
    console.log(
      "Schema Enum:",
      Enrollment.schema.path("highestQualification").enumValues
    );

    const savedEnrollment = await enrollment.save();

    console.log("ENROLLMENT SAVED:", savedEnrollment);

    return res.status(201).json({
      success: true,
      message: "Enrollment Submitted Successfully",
      data: savedEnrollment,
    });

  } catch (error) {

    console.error("ENROLLMENT ERROR:");
    console.error(error);

    // Duplicate email
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already enrolled.",
      });
    }

    // Mongoose Validation Error
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
});

module.exports = router;