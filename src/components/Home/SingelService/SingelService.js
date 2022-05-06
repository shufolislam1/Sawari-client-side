import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SingelService.css";

const SingelService = ({ singelService }) => {
  const { img, name, price, description } = singelService;
  return (
    <div className="img-fluid">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            {" "}
            <p>{name}</p>
          </Card.Title>
          <Card.Text>
            <p className="text-align-center justify-content-center">{description}</p>
            <h3>Price: {price}</h3>
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingelService;
