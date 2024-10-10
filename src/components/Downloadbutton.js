import React from "react";

const DownloadButton = ({ qrCodeUrl }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qr_code.png"; // Change the filename as needed
    link.click();
  };

  return (
    <button class="downloadButton" onClick={handleDownload}>Download QR Code</button>
  );
};

export default DownloadButton;
