import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRCodeDisplay from "./pages/QRCodeDisplay"; // Adjust the import based on your structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-code" element={<QRCodeDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
