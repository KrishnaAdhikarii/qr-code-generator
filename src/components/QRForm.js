import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const backendUrl = process.env.REACT_APP_BACKEND_URL;


function QRForm() {
  const [formData, setFormData] = useState({
    text: "",
    color: "#000000",
    bgColor: "#ffffff",
    errorCorrectionLevel: "L",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateQRCode = async (formData) => {
    try {
      const response = await axios.post(`${backendUrl}/api/generate-qr`, formData);
      // Handle response, like updating QR code URL state
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  return (
    <form onSubmit={generateQRCode} className="qr-form">
      <div style={{ fontWeight: "bold", fontSize: "16px" }}>
        Enter details to generate a QR Code
      </div>

      <div className="brutalist-container">
        <input
          placeholder="TYPE HERE"
          className="brutalist-input smooth-type"
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
          required
        />
        <label className="brutalist-label">Enter Here</label>
      </div>

      <div className="brutalist-container">
        <label className="colour-label">
          Foreground Color:
          <input
            className="brutalist-color"
            type="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="brutalist-container">
        <label className="colour-label">
          Background Color:
          <input
            className="brutalist-color"
            type="color"
            name="bgColor"
            value={formData.bgColor}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <label>
        <label className="colour-label">Error Correction Level:</label>
        <select
          className="dropdown"
          name="errorCorrectionLevel"
          onChange={handleInputChange}
          value={formData.errorCorrectionLevel}
        >
          <option value="L" style={{ fontWeight: "bold" }}>Low</option>
          <option value="M" style={{ fontWeight: "bold" }}>Medium</option>
          <option value="Q" style={{ fontWeight: "bold" }}>Quartile</option>
          <option value="H" style={{ fontWeight: "bold" }}>High</option>
        </select>
      </label>

      <button className="submitbutton" type="submit">
        <span className="box">Generate QR Code</span>
      </button>
    </form>
  );
}

export default QRForm;
