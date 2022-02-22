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
          onChange={(e) => setUsername(e.target.value)}
          />
        <input
          type="text"
          className= "form-control"
          id="password"
          name= "password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className= "btn">Submit</button>
      </form>
    </div>
  )
}

export default Login
