const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const flightRoutes = require("./routes/flightRoutes");
app.use("/api/flights", flightRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Flight Booking Backend is running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
