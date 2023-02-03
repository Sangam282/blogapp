import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({isShown = true}) => {
  return (
    <nav style={{
      display: `${isShown ? 'flex': 'none'}`
    }}>
      <ul>
        <Link to={'/'}>
        <a >Home</a>
        </Link>
        <Link to={'/about'}>
        <a>About</a>
        </Link>
        <Link to={'/users'}>
        <a>Users</a>
        </Link>
        <Link to={'/login'}>
        <a>Login</a>
        </Link>
        <Link to={'/signUp'}>
        <a>SignUp</a>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar