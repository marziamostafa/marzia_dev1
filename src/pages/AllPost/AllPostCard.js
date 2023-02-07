import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { FcLike } from "react-icons/fc";
const AllPostCard = ({ data }) => {

    const { _id, image, likes, postTime, details } = data

    const [users, setUsers] = useState(
        localStorage.getItem('userData')
    )
    const user = JSON.parse(users)
    const [categoryComments, setCategoryComments] = useState('')
    const [filtereComment, setFiltereComment] = useState([])

    const [count, setCount] = useState(0)
    data.likes = count
    useEffect(() => {
        fetch(` https://reg-login-server.vercel.app/comments`)
            .then(res => res.json())
            .then(data => {
                setCategoryComments(data)


                const array = categoryComments.filter(info => info.categoryId === _id)


                setFiltereComment(array)

            })

    }, [categoryComments, _id])


    const handleComment = (event) => {

        event.preventDefault();
        const form = event.target;
        const comments = form.comment.value;

        const email = user?.email
        console.log(comments, email)

        const item = {
            categoryId: _id,
            comment: comments,

            email: user?.email,

        }

        fetch('https://reg-login-server.vercel.app/comments', {

            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('usersToken')}`

            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {

                console.log(result)
                toast.success('added Item successfully')
                window.location.reload()

            })


    }



    const handleCount = () => {
        const number = count + 1
        setCount(number)
        console.log(count)


        fetch(`https://reg-login-server.vercel.app/${_id}`, {


            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="card min-w-screen-xl bg-lime-100 shadow-xl mt-2 ">
            <p className='flex h-8 justify-center items-center bg-cyan-100 pb-2'><FaUserCircle className='h-8'></FaUserCircle> {data?.email}</p>
            <figure><img src={image} alt="Shoes" className='' /></figure>
            <div className="card-body">
                <p>Time: <small>{postTime}</small></p>
                <p>{details}</p>

                <button className='w-fit flex items-center gap-2' onClick={handleCount}><FcLike></FcLike>{count}</button>


                <div className="card text-bg-light mb-3 mt-4" >
                    <div className="card-header">Comments {likes}</div>

                    {
                        filtereComment.map(dt => <div className="card mb-2 bg-orange-100">
                            <div className="card-header flex items-center" key={dt._id}>
                                <FaUserCircle></FaUserCircle> {dt?.email}
                            </div>
                            <div className="card-body p-2 bg-amber-50">
                                <p className="card-text">{dt?.comment}</p>

                            </div>
                        </div>)
                    }



                    <div className="card-body">

                        <p className="card-text"></p>
                    </div>


                    <form class="mb-3" onSubmit={handleComment}>

                        <textarea className="form-control w-full p-2" name="comment" id="exampleFormControlTextarea1" rows="3" required></textarea>

                        <input className='btn btn-dark mt-4 text-black' value="Comment" type="submit" />
                    </form>

                </div>
            </div>

        </div>

    );
};

export default AllPostCard;