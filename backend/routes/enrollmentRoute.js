const express = require("express");

const router = express.Router();

const Enrollment = require("../db/Enrollment");


// CREATE ENROLLMENT
router.post("/enroll", async (req, res) => {
  console.log("BODY RECEIVED:", req.body);
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

  } 
  catch (error) {

  if (error.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "This email is already enrolled.",
    });
  }

  return res.status(500).json({
    success: false,
    message: error.message,
  });
}

});

module.exports = router;