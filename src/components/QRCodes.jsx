import { QRCodeSVG } from "qrcode.react";

function QRCodes() {
  return (
    <div className="qr-container">
      <h2>Scan this QR Code.</h2>
      <QRCodeSVG value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    </div>
  );
}

export default QRCodes;
