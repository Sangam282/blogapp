import React, {useState} from 'react'
import './Sidebar.css'
import Logo from '../../Assets/logo.svg'
import Input from '../Input/Input'

const Sidebar = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setErr] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {name, email, password}
    try{
      const res = await Axios.post('/auth/signup', data)
    }catch(err){
      console.log(err)
      setErr(err.response.data.err)
    }
  }
  return (
    <div className="Container">
      <div className="LogoWrap">
        <img src='Logo' alt=''/>
        <h3>My<spam>Vlog</spam></h3>
      </div>
      {err && <div>
        <h2>
          {err}
          </h2>
          <p onClick={() => {
            setErr(null)
          }}>X</p>
        </div>}
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Password'/>
        <input type="text" placeholder='Confirm Password'/>
        <button>Sign Up</button> 
      </form>
    </div>
  )
}

export default Sidebar