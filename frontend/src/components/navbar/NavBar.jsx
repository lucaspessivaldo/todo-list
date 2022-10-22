import { RiCheckDoubleFill } from 'react-icons/ri'
import UserButton from './UserButton'
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

        <Link to={user ? '#' : '/'} className='navbar-container'>
          <RiCheckDoubleFill className='navbar-logo' />
          <p className='navbar-text'>LOGO</p>
        </Link>

        <div className='navbar-buttons'>
          {!user ? (
            <>
              <Link to="/login">
                <p className='navbar-buttons-link'>Login</p>
              </Link>

              <Link to="/signup">
                <p className='navbar-buttons-link signup-button'>Sign Up</p>
              </Link>
            </>
          ) : (
            <UserButton onLogout={onLogout} username={user.data.name} />
          )}

        </div>

      </div>
    </header>
  )
}
