import React from 'react';
import useServices from '../../hooks/useServices';

const ManageItems = () => {

    const [service, setService] = useServices()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')
        if(proceed){
            const url = `http://localhost:5000/stock/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = service.filter(serviceOne => serviceOne._id !== id)
                setService(remaining)
            })
        }
    }
    return (
        <div>
            <h2>this is manageitems</h2>
            {
                service.map(serviceOne => <div key={serviceOne._id}>
                    <h4>{serviceOne.name} <button onClick={() => handleDelete(serviceOne._id)}>Delete</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageItems;