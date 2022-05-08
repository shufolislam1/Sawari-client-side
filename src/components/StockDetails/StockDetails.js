import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./StockDetails.css";

const StockDetails = () => {
  const { stockId } = useParams();
  const [stock, setStock] = useState({});
  const quantityRef = useRef("");

  useEffect(() => {
    const url = `https://safe-peak-41973.herokuapp.com/stock/${stockId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setStock(data));
  });

  const handleUpdateStock = (event) => {
    event.preventDefault();
    const quantity = quantityRef.current.value;

    const addStock = { quantity };

    // send data to server
    const url = `https://safe-peak-41973.herokuapp.com/stock/${stockId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addStock),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("stock successfully added");
        event.target.reset();
      });
  };
  return (
    <div className="design">
      <Card>
        <Card.Img variant="top" src={stock.img} />
        <Card.Body>
          <Card.Title>
            <h1>{stock.name}</h1>
          </Card.Title>
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

      <Form onSubmit={handleUpdateStock}>
        <Form.Group className="my-3 mx-auto w-75">
          <Form.Control
            ref={quantityRef}
            type="text"
            placeholder="Enter Quantity"
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Restock
        </Button>
      </Form>
    </div>
  );
};

export default StockDetails;
