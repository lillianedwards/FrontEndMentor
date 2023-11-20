import React from "react";
import Card from "react-bootstrap/Card";
import qrImg from '../../qr-code-component-main/images/image-qr-code.png'

function QRCard() {
  return (
    <div className="contain">
      <Card id="card">
        <Card.Img variant="top" src={qrImg} id="qr" />
        <Card.Body>
          <Card.Title id="title">Improve your front-end skills by building projects</Card.Title>
          <Card.Text id="details">
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
        Coded by <a href="https://www.linkedin.com/in/lillian-edwards63/" target="_blank">Lillian Edwards</a>
      </div>
    </div>
  );
}

export default QRCard;
