import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const [users, setUsers] = useState(
        localStorage.getItem('userData')
    )

    const location = useLocation();

    if (users) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;