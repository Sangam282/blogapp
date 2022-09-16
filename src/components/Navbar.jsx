import { Link } from 'react-router-dom'

const Navbar = ({isShown = true}) => {
  return (
    <div style={{
      display: `${isShown ? 'flex': 'none'}`
    }}>

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
    </div>
  )
}

export default Navbar