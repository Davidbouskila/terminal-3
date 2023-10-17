import React from "react";
import BootstrapCard from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Card = ({ title, content, buttonText, onDeleteClick, imageUrl }) => {
  const currentUser = auth.currentUser;

  return (
    <BootstrapCard style={{ width: "18rem", marginLeft: "50px" }}>
      <BootstrapCard.Img variant="top" src={imageUrl} />
      <BootstrapCard.Body style={{ display: "flex", flexDirection: "column" }}>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{content}</BootstrapCard.Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/order">
            <Button variant="success">Book</Button>
          </Link>
          {onDeleteClick && currentUser && (
            <Button
              variant="danger"
              style={{ margin: "4px" }}
              onClick={onDeleteClick}
            >
              Delete
            </Button>
          )}
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
