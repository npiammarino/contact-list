
import {FaSignInAlt, FaSignOutAlt, FaUser, FaRegAddressBook} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Header= ({user, logoutUser}) => {
  const navigate= useNavigate()

  const onLogin= () => {
    navigate('/login')
  }

  const onLogout= () => {
    logoutUser()
    navigate('/')
  }

  const onAdd= () => {
    navigate('/addContact')
  }

  const onRegister= () => {
    navigate('/register')
  }

  return(
      <header id="header">
        {user ?
        (
          <div className="header-control">
            <button className="btn" onClick={onAdd}>
              <FaRegAddressBook /> Add Contact
            </button>
            <div className="center-split">
            </div>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        ) : (
          <div className="header-control">
            <div className="center-split">
              <h2>Login or register to begin</h2>
            </div>
            <button className="btn" onClick={onLogin}>
              <FaSignInAlt /> Login
            </button>
            <button className="btn" onClick={onRegister}>
              <FaUser /> Register
            </button>
          </div>
        )}
      </header>
  )
}

export default Header
