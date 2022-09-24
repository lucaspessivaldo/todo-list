import { RiCheckDoubleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
  return (
    <header className='navbar-full'>
      <div className='navbar'>

        <Link to="/" className='navbar-container'>
          <RiCheckDoubleFill className='navbar-logo' />
          <p className='navbar-text'>checklist</p>
        </Link>

        <div className='navbar-buttons'>
          <Link to="/login">
            <p className='navbar-buttons-link'>Login</p>
          </Link>

          <Link to="/signup">
            <p className='navbar-buttons-link signup-button'>Sign Up</p>
          </Link>
        </div>

      </div>
    </header>
  )
}
