import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Booking from "./pages/Booking";
import Success from "./pages/Success";
import History from "./pages/History";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/success/:pnr" element={<Success />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
