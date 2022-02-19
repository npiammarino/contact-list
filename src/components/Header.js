
import {FaSignInAlt, FaSignOutAlt, FaUser, FaRegAddressBook} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const Header= ({user}) => {
  const navigate= useNavigate()

  const onLogin= () => {
    navigate('/login')
  }

  return(
      <header id="header">
        {user ?
        (
          <div className="header-control">
            <button className="btn" onClick="">
              <FaRegAddressBook /> Add Contact
            </button>
            <div className="center-split">
              <h2>{user}</h2>
            </div>
            <button className="btn" onClick="">
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
            <button className="btn" onClick="">
              <FaUser /> Register
            </button>
          </div>
        )}
      </header>
  )
}

export default Header
