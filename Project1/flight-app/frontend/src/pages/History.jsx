import { useEffect, useState } from "react";

function History() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Dummy booking history (backend will load real data later)
    const dummyBookings = [
      {
        pnr: "PNR12345",
        passenger: "John Doe",
        airline: "Air India",
        flight_id: "AI101",
        from: "Delhi",
        to: "Mumbai",
        amount: 2500,
        date: "2025-01-12 10:30 AM",
      },
      {
        pnr: "PNR67890",
        passenger: "Ameena Shaik",
        airline: "IndiGo",
        flight_id: "6E203",
        from: "Hyderabad",
        to: "Bangalore",
        amount: 2300,
        date: "2025-01-10 03:15 PM",
      },
    ];

    setBookings(dummyBookings);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Booking History</h1>

      {bookings.length === 0 && <p>No bookings found.</p>}

      {bookings.map((b) => (
        <div
          key={b.pnr}
          style={{
            border: "1px solid gray",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "15px",
          }}
        >
          <h3>
            {b.airline} ({b.flight_id})
          </h3>
          <p>
            {b.from} → {b.to}
          </p>
          <p>Passenger: {b.passenger}</p>
          <p>Date: {b.date}</p>
          <b>Paid: ₹{b.amount}</b>
          <br />
          <p>PNR: <b>{b.pnr}</b></p>

          <button
            style={{
              marginTop: "10px",
              padding: "8px 15px",
            }}
          >
            Download Ticket
          </button>
        </div>
      ))}
    </div>
  );
}

export default History;
