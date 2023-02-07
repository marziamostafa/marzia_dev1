import React from 'react';
import { Outlet } from 'react-router-dom';
import AddPost from '../AddPost/AddPost';
import AllPost from '../AllPost/AllPost';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;