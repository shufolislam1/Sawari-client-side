import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SingelService.css";

const SingelService = ({ singelService }) => {
  const { id,  img, name, price, description } = singelService;
  const navigate = useNavigate()
  const navigateToStockDetails = (id) => {
      navigate(`/service/${id}`)
  }

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
          <Button onClick={() => navigateToStockDetails(id)} variant="dark">Stocks</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingelService;
