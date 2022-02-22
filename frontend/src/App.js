import './index.css'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'

const App= () => {
  const [user, setUser]= useState()

  const loginUser= async (token) => {
    setUser(token)
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
