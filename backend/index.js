const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

require("dotenv").config();

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());


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

const contactRoute = require("./routes/contactRoute");
app.use("/api", contactRoute)

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend Running");
});
/* SERVER */
app.listen(5000, () => {
  console.log("Server Started");
});