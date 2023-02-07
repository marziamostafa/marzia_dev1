import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');

    const [users, setUsers] = useState(
        localStorage.getItem('userData')
    )
    const navigate = useNavigate()

    const [allInfo, setAllInfo] = useState([])
    useEffect(() => {
        fetch(` https://reg-login-server.vercel.app/allusers`)
            .then(res => res.json())
            .then(data => setAllInfo(data))

    }, [])


    console.log(users)



    const handleLogin = (data, event) => {
        const form = event.target;
        console.log(data)
        const array = allInfo.filter(info => info.name === data.username)

        console.log(array)

        if (array[0].password === data.password) {
            alert("logged in")

            form.reset()
            navigate('/home')
            localStorage.setItem('userData', JSON.stringify(array[0]));

        }
        else {
            alert("wrong password")
        }

    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">User Name</span></label>
                        <input type="text"
                            {...register("username", {
                                required: "User Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.username && <p className='text-red-600'>{errors.username?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        <label className="label"> <span className="label-text"><Link to='/update' className='underline'>Forgot Password?</Link></span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full' value="Login" type="submit" />

                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>

                </form>
                <p><Link className='text-secondary' to="/registration">Create new Account</Link></p>

            </div>
        </div>
    );
};

export default Login;