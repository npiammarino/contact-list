import './index.css'
import Button from './components/Button'
import ContactList from './components/contact/ContactList'
import DisplayContact from './components/contact/DisplayContact'
import AddContact from './components/contact/AddForm'
import {useState, useEffect} from 'react'


const App= () => {
  //initialize contact list
  const [contacts, setContacts] = useState()
  const [selected, setSelected] = useState('init')
  const [editing, setEditing] = useState(false)
  const [userToken, setUserToken]= useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQ0YjU0NzIyZWNmNWI1NzYyMGM2NSIsImlhdCI6MTY0NTA0MTkyMSwiZXhwIjoxNjQ1OTA1OTIxfQ.1iN6x8TxfiH1sELrYcJX5phUt1i-vkRamTmAg9r1Vb8')
  // const [userToken, setUserToken]= useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQ2MTYzMTIxNjJjMGM5OWIwNDkzNiIsImlhdCI6MTY0NTA0NDA2NywiZXhwIjoxNjQ1OTA4MDY3fQ.UIsjCWEzjx6K83re0pn0tHMMy8eH5t0SU7b1kYuZSfw')

  const fetchContacts= async () => {
    //const port= process.env.REACT_APP_SERVER_PORT  <how to get this?>
    const res= await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/contacts`, {
      headers: {
        'authorization': `Bearer ${userToken}`,
      }
    })
    const data= await res.json()
    return data
  }

  useEffect(() => {
    const getContacts = async () => {
      const contactsFromServer= await fetchContacts()
      setContacts(contactsFromServer)
      if(selected === 'init'){setSelected(contactsFromServer[0])}
    }
    getContacts()

  },[selected])

  const selectContact= (contact) => {
    setSelected(contact)
  }
  const addContact= async (contact) => {
    const res= await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/contacts/`, {
      method : 'POST',
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${userToken}`,
      },
      body: JSON.stringify(contact),
    })

    const newContact= await res.json()
    setSelected(newContact)
  }
  const updateContact= async (contact) => {
      const id= selected._id
      const res= await fetch(
        `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/contacts/${id}`, {
          method : 'PUT',
          headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${userToken}`,
          },
          body: JSON.stringify(contact),
      })

      const newContact= await res.json()
      setSelected(newContact)
      setEditing(false)
  }
  const removeContact= async () => {
    const id= selected._id
    //determine next contact to select
    const remove= contacts.find(x => x._id === id)
    const ind= contacts.indexOf(remove)
    const setIndex= (ind === 0 ? 1 : ind-1)
    const newSelected= contacts[setIndex]

    fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/contacts/${id}`, {
      method : 'DELETE',
      headers: {
        'authorization': `Bearer ${userToken}`,
      }
    }).then(res => setSelected(newSelected))

  }
  const toggleEdit= () => {
    setEditing(!editing)
  }

  return (
    <>
      {/*Add*/}
      <div className='container'>
        <header className='header'>
          <h1>Add Contact</h1>
        </header>
        <AddContact fillContact={selected} editing={editing}
          onAdd={addContact}  onEdit={toggleEdit} onUpdate={updateContact}/>
      </div>
      {/*select/display*/}
      <div className='container'>
        <header className='header'>
          <h1>Contacts</h1>
        </header>
        <ContactList contacts={contacts} onSelect={selectContact} editing={editing} selected={selected}/>
        <DisplayContact contact={selected}/>
        <Button className= 'btn-control button' text='Remove' onClick={removeContact}/>
      </div>
    </>
  )
}

export default App;
