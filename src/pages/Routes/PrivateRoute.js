import React from 'react';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;