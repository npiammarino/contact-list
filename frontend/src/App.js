import './index.css'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AddForm from './components/contact/AddForm'

const App= () => {
  const [user, setUser]= useState()
  const [contacts, setContacts]= useState()

  const fetchContacts= async () => {
    const res= await fetch(`http://localhost:3000/api/contacts`, {
      methode: "GET",
      headers: {
        "Authorization": `Bearer ${user}`
      }
    })

    const data= await res.json()
    return data
  }

  useEffect(() => {
    const getContacts= async () => {
      const data= await fetchContacts()
      setContacts(data)
    }
    if(user){getContacts()}
  },[user])

  const loginUser= async (token) => {
    setUser(token)
  }

  const onAdd= (contact) => {
    setContacts([...contacts, contact])
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
              <Route path="/addContact" element={<AddForm  user={user} onAdd={onAdd}/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
