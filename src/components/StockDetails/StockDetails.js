import React from 'react';
import { useParams } from 'react-router-dom';

const StockDetails = () => {
    const {stockId} = useParams()
    return (
        <div>
            <h2>this is StockDetails: {stockId}</h2>
        </div>
    );
};

export default StockDetails;