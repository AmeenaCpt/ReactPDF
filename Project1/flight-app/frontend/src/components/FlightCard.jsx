import { useNavigate } from "react-router-dom";

function FlightCard({ data }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "15px",
        borderRadius: "8px"
      }}
    >
      <h3>{data.airline} ({data.flight_id})</h3>
      <p>{data.departure_city} → {data.arrival_city}</p>
      <b>₹ {data.current_price}</b>
      <br /><br />
      <button onClick={() => navigate(`/booking/${data.id}`)}>
        Book Now
      </button>
    </div>
  );
}

export default FlightCard;
