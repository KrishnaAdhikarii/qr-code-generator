import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Make sure this path is correct
import QRCodeDisplay from "./pages/QRCodeDisplay"; // Assuming you have a QR code display page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the homepage */}
        <Route path="/qr-code" element={<QRCodeDisplay />} /> {/* Route for displaying the QR code */}
      </Routes>
    </Router> 
  );
};

export default App;
