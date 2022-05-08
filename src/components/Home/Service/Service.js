import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingelService from "../SingelService/SingelService";
import "./Service.css";

const Service = () => {
  const [service, setService] = useState([]);

  
  useEffect(() => {
    fetch("https://safe-peak-41973.herokuapp.com/stock")
    .then((res) => res.json())
    .then((data) => setService(data));
  }, []);
  
  const minService = service.slice(0, 6);
  const navigate = useNavigate();

  const handleMoreStocks = () => {
    navigate('/manageitems')
  }
  return (
    <div>
      <h1 className="text-dark">Stocks</h1>
      <div  className="service-style">
        {minService?.map((singelService) => (
          <SingelService
            key={singelService._id}
            singelService={singelService}
          ></SingelService>
        ))}

      </div>
      <Button onClick={ () => handleMoreStocks()} className="my-4" variant="dark">See More Stocks</Button>
    </div>
  );
};

export default Service;
