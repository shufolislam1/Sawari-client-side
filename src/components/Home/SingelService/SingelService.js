import React from "react";
import { Button, Card } from "react-bootstrap";
import './SingelService.css'

const SingelService = ({ singelService }) => {
  const {img, name, price, description } = singelService;
  return (
    <div className="stock-design">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <p>{description}</p>

          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingelService;
