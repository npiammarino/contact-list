import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

const Login= () =>{
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')

  const onSubmit= () => {

  }

  const onChange= () => {

  }

  return(
    <div className="login-container">
      <h1><FaSignInAlt /> Login</h1>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          type="text"
          className= "form-control"
          id="username"
          name= "username"
          value={username}
          placeholder="Username"
          onChange={onChange}
          />
        <input
          type="text"
          className= "form-control"
          id="password"
          name= "password"
          value={password}
          placeholder="Password"
          onChange={onChange}
          />
      </form>
    </div>
  )
}

export default Login
