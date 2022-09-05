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
    </div>
  )
}

export default Navbar