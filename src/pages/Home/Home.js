import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AddPost from '../AddPost/AddPost';
import AllPost from '../AllPost/AllPost';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    const [users, setUsers] = useState(
        localStorage.getItem('userData')
    )
    return (
        <div>
            {
                users ?
                    <AllPost></AllPost>
                    :
                    <Login></Login>
            }
        </div>
    );
};

export default Home;