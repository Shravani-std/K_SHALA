const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 3,
      maxLength: 100,
    },
    email: {
      type: String,
      required: [, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
      index: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
      default:"",
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],

      match: [
        /^[0-9+\-\s]{10,15}$/,
        "Please enter valid phone number",
      ],

      index: true,
    },
    service: {
      type: String,
      required: true,

      enum: [
        "Web Development",
        "App Development",
        "AI & Machine Learning",
        "E-Learning Solutions",
        "Software Development",
        "Other",
      ],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 10,
      maxlength: 1000,
    },
    
  },
  {
    timestamps: true,

    versionKey: false,
  }
);
ContactSchema.index({ email: 1, createdAt: -1, });
module.exports = mongoose.model("Contact", ContactSchema);
