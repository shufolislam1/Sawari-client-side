import React from "react";
import { Button, Card } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import "./ManageItem.css";

const ManageItems = () => {
  const [service, setService] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure ?");
    if (proceed) {
      const url = `http://localhost:5000/stock/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = service.filter(
            (serviceOne) => serviceOne._id !== id
          );
          setService(remaining);
        });
    }
  };
  return (
    <div>
      <h2 className="text-dark mx-auto mt-2"> Manageitems</h2>
      <div className="service-style">
        {service.map((serviceOne) => (
          <div key={serviceOne._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={serviceOne.img} />
              <Card.Body>
                <Card.Title>
                  <h4>{serviceOne.name}</h4>
                </Card.Title>
                <Card.Text>{serviceOne.description}</Card.Text>
                <Button
                  onClick={() => handleDelete(serviceOne._id)}
                  variant="dark"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
