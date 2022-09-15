import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

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