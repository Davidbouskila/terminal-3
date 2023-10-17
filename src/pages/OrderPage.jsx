import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();

  return (
    <div style={pageStyle}>
      <Container style={containerStyle}>
        <h2 style={headerStyle}>Order Successful!</h2>
        <p style={paragraphStyle}>
          Your order has been placed successfully. Thank you for choosing us!
        </p>
        <Button style={buttonStyle} onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    </div>
  );
}

const pageStyle = {
  backgroundColor: "#007bff",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const containerStyle = {
  background: "rgba(255, 255, 255, 0.8)",
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center",
};

const headerStyle = {
  fontSize: "36px",
  margin: "20px",
};

const paragraphStyle = {
  fontSize: "24px",
  margin: "20px",
};

const buttonStyle = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "15px 30px",
  borderRadius: "5px",
  fontSize: "20px",
  cursor: "pointer",
};

export default OrderPage;
