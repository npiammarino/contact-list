import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'


const Login= ({loginUser}) =>{
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')

  const navigate= useNavigate()

  const resetFields= () => {
    setUsername('')
    setPassword('')
  }
  const onSubmit= async (e) => {
    e.preventDefault()

    const res= await fetch(`http://localhost:3000/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })

    const data= await res.json()
    loginUser(data.token)
    resetFields()
    navigate('/')
  }

  return(
    <div className="form-container log-form">
      <h1><FaSignInAlt /> Login</h1>
      <form className="form-fields" onSubmit={onSubmit}>
        <div className= 'form-control'>
          <label>Username</label>
          <input
          type="text"
          className= "form-text"
          id="username"
          name= "username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className= 'form-control'>
          <label>Password</label>
          <input
          type="text"
          className= "form-text"
          id="password"
          name= "password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className= "btn btn-log">Submit</button>
      </form>
    </div>
  )
}

export default Login
