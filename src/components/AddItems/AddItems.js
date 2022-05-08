import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";


const AddItems = () => {

    const nameRef = useRef('')
    const priceRef = useRef('')
    const quantityRef = useRef('')
    const supplierNameRef = useRef('')
    const descriptionRef = useRef('')
    const imgRef = useRef('')

    const handleAddItems = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.currentvalue;
        const quantity = quantityRef.current.value;
        const supplierName = supplierNameRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const addStock = {name, price, quantity, supplierName, description, img}

        // send data to server 

        fetch('http://localhost:5000/newStock', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addStock)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('stock successfully added')
            event.target.reset()
        })

    }
  return (
    <div className="mx-auto w-50 my-4">
      <h2 className="text-dark mt-2">Please Add Items</h2>
      <Form onSubmit={handleAddItems}>
        <Form.Group className="mb-3" >
          <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control ref={priceRef} type="text" placeholder="Enter Price" required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control ref={quantityRef} type="text" placeholder="Enter Quantity" required/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control ref={supplierNameRef} type="text" placeholder="Enter Supplier Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control ref={descriptionRef} type="text" placeholder="Enter Description" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={imgRef} type="text" placeholder="Img Url" required/>
        </Form.Group>

        <Button variant="dark" type="submit">
          Add Items
        </Button>
      </Form>
    </div>
  );
};

export default AddItems;
