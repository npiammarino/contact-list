import './index.css'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App= () => {
  const [user, setUser]= useState()
  const [contacts, setContacts]= useState()

  const loginUser= async (token) => {
    setUser(token)
  }

  const logoutUser= () => {
    setUser(null)
  }

  return(
    <>
      <Router>
        <div className="container">
          <Header user={user} logoutUser={logoutUser}/>
          <div id= "main">
            <Routes>
              <Route path="/" element={<Dashboard contacts={contacts} user={user} />}/>
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route path="/register" element={<Register loginUser={loginUser} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
