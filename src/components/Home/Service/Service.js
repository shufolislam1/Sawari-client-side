import React, { useEffect, useState } from "react";
import SingelService from "../SingelService/SingelService";
import "./Service.css";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1 className="text-dark">Stocks</h1>
      <div  className="service-style">
        {service.map((singelService) => (
          <SingelService
            key={singelService.id}
            singelService={singelService}
          ></SingelService>
        ))}
      </div>
    </div>
  );
};

export default Service;
