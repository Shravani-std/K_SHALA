const express = require("express");

const router = express.Router();

const Enrollment = require("../modules/Enrollment");

/* CREATE ENROLLMENT */

router.post("/enroll", async (req, res) => {

  try {

    console.log(req.body);

    const enrollment = new Enrollment(req.body);

    await enrollment.save();

    res.status(201).json({
      success: true,
      message: "Enrollment Submitted Successfully",
    });

  } catch (error) {

    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;