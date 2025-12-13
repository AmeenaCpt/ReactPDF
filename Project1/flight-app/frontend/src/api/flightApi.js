// flightApi.js (for frontend testing)
export const getFlights = async (from, to, date) => {
  // Return dummy flights
  return [
    {
      id: "F001",
      airline: "Air India",
      flight_id: "AI101",
      departure_city: from,
      arrival_city: to,
      current_price: 2500
    },
    {
      id: "F002",
      airline: "IndiGo",
      flight_id: "6E203",
      departure_city: from,
      arrival_city: to,
      current_price: 2300
    },
    {
      id: "F003",
      airline: "SpiceJet",
      flight_id: "SG405",
      departure_city: from,
      arrival_city: to,
      current_price: 2100
    }
  ];
};
