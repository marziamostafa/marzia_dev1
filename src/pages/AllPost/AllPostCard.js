import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
const AllPostCard = ({ data }) => {

    const { image } = data
    return (
        <div className="card min-w-screen-xl bg-lime-100 shadow-xl mt-2 ">
            <p className='flex h-8 justify-center items-center bg-cyan-100 pb-2'><FaUserCircle className='h-8'></FaUserCircle> {data?.email}</p>
            <figure><img src={image} alt="Shoes" className='' /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllPostCard;