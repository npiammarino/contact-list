import './index.css'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'

const App= () => {
  const [user, setUser]= useState('kljlk')

  const loginUser= async (username, password) => {
    console.log("called")
    const res= await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: {
        username,
        password
      }
    })
    console.log(res.json())
  }

  const logoutUser= () => {
    setUser(null)
  }

  return(
    <>
      <Router>
        <Header user={user} logoutUser={logoutUser}/>
        <div id= "main">
          <Routes>
            <Route path="/login" element={<Login loginUser={loginUser} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
