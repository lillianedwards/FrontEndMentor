import React from "react";
import Card from "react-bootstrap/Card";
import qrImg from '../../qr-code-component-main/images/image-qr-code.png'

function QRCard() {
  return (
    <div className="contain">
      <Card className="card">
        <Card.Img variant="top" src={qrImg} className="qr" />
        <Card.Body>
          <Card.Title className="title">Improve your front-end skills by building projects</Card.Title>
          <Card.Text className="details">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor 
        </a>
        <br />
        Coded by <a href="#">Lillian Edwards</a>.
      </div>
    </div>
  );
}

export default QRCard;
