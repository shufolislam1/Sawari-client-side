import { useEffect, useState } from "react";


const useServices = () => {
    const [service, setService] = useState([]);

  
    useEffect(() => {
      fetch("https://safe-peak-41973.herokuapp.com/stock")
      .then((res) => res.json())
      .then((data) => setService(data));
    }, []);
    return [service, setService]
}

export default useServices;