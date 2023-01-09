import React from 'react'
import bgImg from '../Assets/bg.png'
import './Signup.css'
import Navbar from '../Navbar'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar';


const Signup = () => {
  return (
    <>
    <Navbar isShown={false} />
    <div className="Container" style={{ backgroundImage:`url(${bgImg})`}}>
      <div className="Wrapper" style={{ backgroundImage:`url(${bgImg})`}}>
        <Sidebar /> 
        {/*<Main/>*/}
      </div>
      
    </div>
    </>
  )
};


export default Signup;