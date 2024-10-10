import React from "react";
import DownloadButton from "./Downloadbutton";

const QRPreview = ({ qrCodeUrl }) => {
  return (
    <div className="qr-preview">
      {qrCodeUrl ? (
        <>
          <img src={qrCodeUrl} alt="Generated QR Code" />
          <DownloadButton qrCodeUrl={qrCodeUrl} />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default QRPreview;
