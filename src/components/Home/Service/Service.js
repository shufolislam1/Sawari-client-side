import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingelService from "../SingelService/SingelService";
import "./Service.css";

const Service = () => {
  const [service, setService] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect( () => {
    fetch('http://localhost:5000/stockCount')
    .then(res => res.json())
    .then(data => {
      const count = data.count;
      const pages = Math.ceil(count/6)
      setPageCount(pages)
    })
  } , [])

  useEffect(() => {
    fetch("http://localhost:5000/stock")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const minService = service.slice(0, 6);
  const navigate = useNavigate();

  const handleMoreStocks = () => {
    navigate('/morestocks')
  }
  // console.log(minService);
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

        {/* {
          service?.map(moreService => <MoreStocks key={moreService.id} moreService={moreService}></MoreStocks>)
        } */}
      </div>
      <Button onClick={ () => handleMoreStocks()} className="my-4" variant="dark">See More Stocks</Button>
    </div>
  );
};

export default Service;
