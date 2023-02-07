import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './AllPost.css'
import AllPostCard from './AllPostCard';



const AllPost = () => {
    const [users, setUsers] = useState(
        localStorage.getItem('userData')
    )

    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch(`https://reg-login-server-marziamostafa.vercel.app/allmedia`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className='mx-20'>
            {
                allData?.map(data => <AllPostCard
                    key={data._id}
                    data={data}
                ></AllPostCard>)
            }
        </div>
    );
};

export default AllPost;