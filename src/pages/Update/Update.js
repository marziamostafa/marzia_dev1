import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Update = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUPError] = useState('');

    const [allInfo, setAllInfo] = useState([])
    const [review, setReview] = useState(allInfo)

    useEffect(() => {
        fetch(` https://reg-login-server.vercel.app/allusers`)
            .then(res => res.json())
            .then(data => setAllInfo(data))

    }, [])

    const handleUpdate = (data) => {

        const array = allInfo.filter(info => info.name === data.username)
        console.log(array)

        const item = {
            name: data.username,
            email: data.email,
            password: data.password

        }
        console.log(item)
        setReview(item)
        if (array[0].email === data.email && array[0].name === data.username) {
            console.log(data.email)

            fetch(` https://reg-login-server.vercel.app/updates/${data.email}`, {

                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(item)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (data.acknowledged === "true") {
                        alert('Updated successfully')
                        window.location.reload()
                    }
                    // navigate('/dashboard/myaddedproducts')
                })


        }
        else {
            alert("wrong user.. try again")
        }



    }
    return (
        <div className='h-96 flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Update User info</h2>
                <form onSubmit={handleSubmit(handleUpdate)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("username", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">New Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Update" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>

            </div>
        </div>
    );
};

export default Update;