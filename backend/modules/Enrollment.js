const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    highestQualification: {
      type: String,
      required: true,
    },

    university: {
      type: String,
      required: true,
    },

    passingYear: {
      type: String,
      required: true,
    },

    batchTiming: {
      type: String,
      required: true,
    },

    heardAbout: {
      type: String,
      required: true,
    },

    courseTitle: {
      type: String,
      required: true,
    },

    terms: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Enrollment",
  EnrollmentSchema
);