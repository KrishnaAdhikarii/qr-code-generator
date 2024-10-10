import React, { useState } from "react";
import QRForm from "../components/QRForm";
import QRPreview from "../components/QRPreview";

const Home = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState(null);

  return (
    <div className="home">
      <h1 style={{fontWeight:"bold"}}>Personalized QR Code Generator</h1>
      <div className="formbox">
      <QRForm setQrCodeUrl={setQrCodeUrl} /></div>
      <QRPreview qrCodeUrl={qrCodeUrl} />
    </div>
  );
};

export default Home;
