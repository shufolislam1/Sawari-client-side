import { useEffect, useState } from "react";


const useServices = () => {
    const [service, setService] = useState([]);

  
    useEffect(() => {
      fetch("sawari-server-side-production.up.railway.app")
      .then((res) => res.json())
      .then((data) => setService(data));
    }, []);
    return [service, setService]
}

export default useServices;