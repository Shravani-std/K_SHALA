const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* DATABASE CONNECTION */

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

/* ROUTES */

const enrollmentRoute = require("./routes/enrollmentRoute");

app.use("/api", enrollmentRoute);

/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* SERVER */

app.listen(5000, () => {
  console.log("Server Started");
});