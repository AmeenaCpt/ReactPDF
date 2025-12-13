import { useParams, useNavigate } from "react-router-dom";

function Success() {
  const { pnr } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Booking Successful 🎉</h1>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
          display: "inline-block",
        }}
      >
        <h2>Your PNR:</h2>
        <h1 style={{ color: "green" }}>{pnr}</h1>

        <p style={{ marginTop: "10px" }}>
          Thank you for booking with XTechon.  
          Your ticket is confirmed!
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        {/* This will work after backend */}
        <button style={{ padding: "10px 20px", marginRight: "15px" }}>
          Download Ticket
        </button>

        <button
          onClick={() => navigate("/history")}
          style={{ padding: "10px 20px" }}
        >
          View Booking History
        </button>
      </div>
    </div>
  );
}

export default Success;
