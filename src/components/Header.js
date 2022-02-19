import useState from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaRegAddressBook} from 'react-icons/fa'

const Header= ({user}) => {

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
            <button className="btn" onClick="">
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
