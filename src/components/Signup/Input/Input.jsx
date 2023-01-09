import React from 'react'
import './Input.css'

const Input = ({ type, placeholder }) => {
  return (
    <div className='Container'>
      <div className='StyleInput' 
        placeholder={placeholder && placeholder} 
        type={type ? type : "text"} 
        requiredautocomplete="off"/>
      <div className ='Status'/> 
    </div>
  )
}

export default Input
