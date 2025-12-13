const express = require("express");
const router = express.Router();

// Dummy flight data
const flights = [
  {
    id: 1,
    from: "Delhi",
    to: "Mumbai",
    airline: "IndiGo",
    price: 4500,
    time: "10:30 AM",
  },
  {
    id: 2,
    from: "Delhi",
    to: "Mumbai",
    airline: "Air India",
    price: 5200,
    time: "02:00 PM",
  },
  {
    id: 3,
    from: "Hyderabad",
    to: "Bangalore",
    airline: "Vistara",
    price: 3800,
    time: "09:00 AM",
  },
  {
    id: 4,
    from: "Chennai",
    to: "Delhi",
    airline: "IndiGo",
    price: 6100,
    time: "06:45 PM",
  }
];

// Search flights API
router.get("/search", (req, res) => {
  const { from, to } = req.query;

  if (!from || !to) {
    return res.status(400).json({ message: "From and To required" });
  }

  const result = flights.filter(
    (flight) =>
      flight.from.toLowerCase() === from.toLowerCase() &&
      flight.to.toLowerCase() === to.toLowerCase()
  );

  res.json(result);
});

module.exports = router;
