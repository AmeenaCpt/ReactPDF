const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    flight_id: String,
    passenger_name: String,
    price: Number,
    PNR: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
