import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const from = params.get("from");
  const to = params.get("to");

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/flights/search?from=${from}&to=${to}`)
      .then((res) => {
        setFlights(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [from, to]);

  if (loading) return <p>Loading flights...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Flights from {from} to {to}
      </h2>

      {flights.length === 0 ? (
        <p>No flights found</p>
      ) : (
        flights.map((flight) => (
          <div
            key={flight.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p><b>Airline:</b> {flight.airline}</p>
            <p><b>Time:</b> {flight.time}</p>
            <p><b>Price:</b> ₹{flight.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;
