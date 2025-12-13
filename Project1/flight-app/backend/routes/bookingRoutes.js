const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// Dummy user wallet
let users = [
  {
    id: 1,
    name: "Ameena",
    wallet: 50000
  }
];

// Dummy bookings storage
let bookings = [];

// Generate PNR
function generatePNR() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Book a flight
router.post("/book", (req, res) => {
  const { user_id, flight } = req.body;

  const user = users.find(u => u.id === user_id);
  if (!user) return res.status(400).json({ message: "User not found" });

  if (user.wallet < flight.price) {
    return res.status(400).json({ message: "Insufficient wallet balance" });
  }

  // Deduct wallet
  user.wallet -= flight.price;

  // Generate PNR
  const PNR = generatePNR();

  // Create booking
  const booking = {
    ...flight,
    user_id,
    PNR,
    date: new Date().toLocaleString()
  };
  bookings.push(booking);

  // Generate PDF
  const ticketsDir = path.join(__dirname, "../tickets");
  if (!fs.existsSync(ticketsDir)) fs.mkdirSync(ticketsDir);

  const doc = new PDFDocument();
  const pdfPath = path.join(ticketsDir, `${PNR}.pdf`);
  doc.pipe(fs.createWriteStream(pdfPath));

  doc.fontSize(20).text("Flight Ticket", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Passenger: ${user.name}`);
  doc.text(`Flight: ${flight.airline} (${flight.id})`);
  doc.text(`Route: ${flight.from} → ${flight.to}`);
  doc.text(`Price Paid: ₹${flight.price}`);
  doc.text(`PNR: ${PNR}`);
  doc.text(`Booking Date: ${booking.date}`);
  doc.end();

  res.json({
    message: "Booking successful ✅",
    PNR,
    pdf: pdfPath,
    remainingWallet: user.wallet
  });
});

// Booking history
router.get("/history/:user_id", (req, res) => {
  const { user_id } = req.params;
  const userBookings = bookings.filter(b => b.user_id == user_id);
  res.json(userBookings);
});

module.exports = router;
