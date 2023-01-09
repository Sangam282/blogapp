import React from 'react'
import "./Login.css"
import Navbar from '../Navbar'
import bgImg from '../Assets/Fortnite.mp4'


const Login = () => {
  return (
    <>
    <Navbar isShown={false} />
    <section className='Login'>
        <div className="register">
            {/* ERROR */}
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Register here..</span>

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