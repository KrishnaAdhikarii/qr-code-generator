import React from "react";
import { useLocation } from "react-router-dom";
import DownloadButton from "../components/Downloadbutton";



const QRCodeDisplay = () => {
  const location = useLocation();
  const qrCodeUrl = location.state?.qrCodeUrl;

  return (
    <div className="qr-code-display">
      <h1 style={{ fontWeight: "bold", }}>Your Generated QR Code!!</h1>
      {qrCodeUrl ? (
        <><img src={qrCodeUrl} alt="Generated QR Code!!" />
        <DownloadButton qrCodeUrl={qrCodeUrl} /></>

      ) : (
        <p>No QR Code generated.</p>
      )}
    </div>
  );
};

export default QRCodeDisplay;
