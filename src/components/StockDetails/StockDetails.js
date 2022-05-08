import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './StockDetails.css'

const StockDetails = () => {
  const { stockId } = useParams();
  const [stock, setStock] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/stock/${stockId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setStock(data));
  });
  return (
    <div className="design">
      <Card >
        <Card.Img variant="top" src={stock.img} />
        <Card.Body>
          <Card.Title><h1>{stock.name}</h1></Card.Title>
          <Card.Text>
            <h4>ID NO: {stock._id}</h4>
            <h2>Price : {stock.price}</h2>
            <h2>Quantity : {stock.quantity}</h2>
            <h2>Supplier-Name : {stock.supplier_name}</h2>
            <p>Description: {stock.description}</p>
          </Card.Text>
          <Button variant="dark">Delivered</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StockDetails;
