import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    if (!from || !to) {
      alert("Please select both cities!");
      return;
    }
    navigate(`/search?from=${from}&to=${to}`);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center', // vertical center
      justifyContent: 'center', // horizontal center
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #74ebd5, #acb6e5)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        width: '350px',
        textAlign: 'center',
      }}>
        <h1 style={{
          color: '#333',
          fontSize: '2rem',
          marginBottom: '30px',
        }}>Flight Search</h1>

        <div style={{ marginBottom: '20px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>From City:</label>
          <input
            type="text"
            placeholder="e.g. Delhi"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
              transition: '0.3s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#4caf50'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>To City:</label>
          <input
            type="text"
            placeholder="e.g. Mumbai"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              outline: 'none',
              transition: '0.3s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#4caf50'}
            onBlur={(e) => e.target.style.borderColor = '#ccc'}
          />
        </div>

        <button
          onClick={handleSearch}
          style={{
            width: '100%',
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#4caf50',
            color: '#fff',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#45a049';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#4caf50';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default Home;
