import { RiCheckDoubleFill, RiContactsBookLine } from 'react-icons/ri'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../app/authSlice'
import './navbar.css'

export default function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  return (
    <header className='navbar-full'>
      <div className='navbar'>

        <Link to="/" className='navbar-container'>
          <RiCheckDoubleFill className='navbar-logo' />
          <p className='navbar-text'>LOGO</p>
        </Link>

        <div className='navbar-buttons'>
          <Link to="/login">
            <p className='navbar-buttons-link'>Login</p>
          </Link>

          <Link to="/signup">
            <p className='navbar-buttons-link signup-button'>Sign Up</p>
          </Link>

          <FaUserCircle onClick={() => onLogout()} className='navbar-user-picture' />
        </div>

      </div>
    </header>
  )
}
