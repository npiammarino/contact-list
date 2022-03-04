import {FaUser} from 'react-icons/fa'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Register= ({loginUser}) => {
  const [formData, setFormData]= useState({
    username: '',
    password: '',
    password2: ''
  })

  const navigate= useNavigate()
  const {username, password, password2}= formData

  const resetFields= () => {
    setFormData({
      username: '',
      password: '',
      password2: ''
    })
  }

  const onSubmit= async (e) => {
    e.preventDefault()

    if(password != password2){
      resetFields()
      throw new Error("Passwords do not match")
    }

    const res= await fetch(`/api/users`, {
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data= await res.json()
    loginUser(data.token)
    resetFields()
    navigate('/')

  }

  const onChange= (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="form-container log-form">
      <h1><FaUser /> Register</h1>
      <form className="form-fields" onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Username</label>
          <input
            type="text"
            className= "form-text"
            id="username"
            name= "username"
            value={username}
            placeholder="Username"
            onChange={onChange}
            />
        </div>
        <div className='form-control'>
          <label>Password</label>
          <input
            type="text"
            className= "form-text"
            id="password"
            name= "password"
            value={password}
            placeholder="Password"
            onChange={onChange}
            />
        </div>
        <div className='form-control'>
          <label>Confirm Password</label>
          <input
            type="text"
            className= "form-text"
            id="password2"
            name= "password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
            />
        </div>
        <button type="submit" className= "btn btn-log">Submit</button>
      </form>
    </div>
  )
}

export default Register
