import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [flight, setFlight] = useState(null);
  const [passenger, setPassenger] = useState("");

  useEffect(() => {
    // Dummy flight (later backend will replace this)
    const dummy = {
      id,
      airline: "Air India",
      flight_id: "AI101",
      departure_city: "Delhi",
      arrival_city: "Mumbai",
      current_price: 2500
    };

    setFlight(dummy);
  }, []);

  const handleBooking = () => {
    if (!passenger) return alert("Enter passenger name!");

    // Later we will call backend and generate PNR
    navigate(`/success/TESTPNR123`);
  };

  if (!flight) return <p>Loading flight...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Details</h2>

      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "15px"
        }}
      >
        <h3>
          {flight.airline} ({flight.flight_id})
        </h3>
        <p>
          {flight.departure_city} → {flight.arrival_city}
        </p>
        <b>Price: ₹{flight.current_price}</b>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Passenger Name:</label>
        <br />
        <input
          type="text"
          placeholder="Enter full name"
          value={passenger}
          onChange={(e) => setPassenger(e.target.value)}
        />
      </div>

      <button
        onClick={handleBooking}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default Booking;
