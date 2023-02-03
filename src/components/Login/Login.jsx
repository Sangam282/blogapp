import React from 'react'
import "./Login.css"
import Navbar from '../Navbar/Navbar'
import bgImg from '../Assets/Fortnite.mp4'
import Axios from '../../api/server'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/react-toastify.css"
import { useEffect } from 'react'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);

    useEffect(() => {
        if (localStorage.getItem ("Id") && localStorage.getItem("token")) {
            window.location.href = "/admin/create";
        }
    }, []);

    useEffect(() => {
        if (err) {
            toast.error(err);
            setErr(null);
        }
    }, [err]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        try {
            const res = await Axios.post("/api/v1/auth/login", data);
            console.log(res.data.data);
            if (res.status === 200) {
                localStorage.setItem("id", res.data.data.id);
                localStorage.setItem("token", res.data.data.token);
                window.location.href = "/admin/create";
            }
        } catch (err) {
            setErr(err.response.data.err);
            setEmail("");
            setPassword("");
        }
    };

    return (
    <>
    <ToastContainer position='bottom-left' theme='colored'/>
    <Navbar isShown={false} />
    <section className='Login'>
        <div className="register">
            {/* ERROR */}
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Register here..</span>z
                <form id="form" className='flex flex-col'>
                    <input type="text" placeholder='Username'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Password'/>
                    <button className='btn'>LogIn</button>
                </form>
            </div>
            <div className="col-2">
                <video className='video' autoPlay muted loop >
                    <source src={bgImg} type="video/mp4"  />
                        Error Message 
                </video>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login