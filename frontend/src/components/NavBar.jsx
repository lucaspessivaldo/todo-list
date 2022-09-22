import {RiCheckDoubleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
  return (
    <header className='navbar-full'>
      <div className='navbar'>

        <Link to="/" className='navbar-container'>
          <RiCheckDoubleFill className='navbar-logo'/> 
          <p className='navbar-text'>checklist</p>
        </Link>

        <div className='navbar-buttons'>
          <Link to="/register">
            <p className='navbar-buttons-link'>Register</p>
          </Link>

          <Link to="/login">
            <p className='navbar-buttons-link'>Login</p>
          </Link>
        </div>

      </div>
    </header>
  )
}
