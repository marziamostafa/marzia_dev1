import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className='px-4 pt-2'><Link to="/allpost">All Post</Link></li>
        <li className='px-4 pt-2'><Link to="/addpost">Add post</Link></li>
    </React.Fragment>

    const [users, setUsers] = useState(
        localStorage.getItem('userData')
    )

    const handleLogOut = () => {
        localStorage.removeItem('userData');
        window.location.reload()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/#' className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            {users === 'null' ?
                <div className="navbar-end">
                    <button className='btn'><Link to='/login'>LogIn</Link></button>
                </div>
                :
                <div className="navbar-end">
                    <button onClick={handleLogOut} className='btn'>Log Out</button>
                </div>
            }
        </div>
    );
};

export default Navbar;