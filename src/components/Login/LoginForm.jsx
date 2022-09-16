import React from 'react'
import "./LoginForm.css"
import Navbar from '../Navbar'

const LoginForm = () => {
  return (
    <>
    <Navbar isShown={false} />
    <form>
        <div className='form-inner'>
            <h2>Login</h2>
            {/* ERROR */}
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id='name'/>
            </div>
            <div className="formgroup">
            <label htmlFor="email">Email:</label>
                <input type="text" email='name' id='email'/>
            </div>
            <div className="formgroup">
            <label htmlFor="password">Password:</label>
                <input type="text" email='password' id='password'/>
            </div>
            <button>LOGIN</button>
        </div>
    </form>
    </>
  )
}

export default LoginForm