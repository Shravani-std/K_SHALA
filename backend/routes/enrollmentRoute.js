const express = require("express");

const router = express.Router();

const Enrollment = require("../db/Enrollment");


// CREATE ENROLLMENT
router.post("/enroll", async (req, res) => {

  try {

    console.log(req.body);

    // Create Enrollment
    const enrollment = new Enrollment(req.body);

    // Save to MongoDB
    await enrollment.save();

    // Success Response
    return res.status(201).json({
      success: true,
      message: "Enrollment Submitted Successfully",
    });

  } catch (error) {

    console.error("Enrollment Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

  }

});

module.exports = router;