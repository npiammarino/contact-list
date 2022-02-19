import './index.css'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'

const App= () => {
  const [user, setUser]= useState('kljlk')

  return(
    <>
      <Router>
        <Header user={user}/>
        <div id= "main">
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
