import './index.css'
import{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'

const App= () => {
  const [user, setUser]= useState("Fillis")

  return(
    <>
      <div className="container">
        <Router>
          <Header user={user}/>
          <div id= "main">

          </div>
        </Router>
      </div>
    </>
  )
}

export default App
