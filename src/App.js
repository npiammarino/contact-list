import {ContactList, AddContact, DisplayContact} from './components/Contact'
//import './index.css'
import Button from './components/Button'
import {v4 as uuid} from 'uuid'
import {useState, useEffect} from 'react'


const App= () => {
  //initialize contact list
  const [contacts, setContacts] = useState()
  const [selected, setSelected] = useState('init')
  const [editing, setEditing] = useState(false)

  const fetchContacts= async () => {
    //const port= process.env.REACT_APP_SERVER_PORT  <how to get this?>
    const res= await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/contacts`)
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

  }, [])

  const selectContact= (contact) => {
    setSelected(contact)
  }
  const addContact= async (contact) => {

    const res= await fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/contacts/`, {
      method : 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    })

    const data= await res
    // const setList= async () => {
    //
    // }
    // const data= await setList()
    // const newContact= data
    // console.log(newContact)
    // setContacts([...contacts, newContact])
    // setSelected(newContact)
  }
  const updateContact= (contact) => {
      const id= selected.id
      const newContact= {id,...contact}
      const newContacts= contacts.filter(x => x.id !== id)
      setContacts([...newContacts, newContact])
      setSelected(newContact)
      setEditing(false)
  }
  const removeContact= async () => {
    const toRemove= selected.id
    const ind= contacts.indexOf(selected)
    const remIndex= (ind === contacts.length - 1 ? ind -1 : ind)
    const newContacts= contacts.filter(x => x.id !== toRemove)
    const newSelected= newContacts[remIndex]
    await fetch(`http://localhost:5000/contacts/${toRemove}`, {method: 'DELETE'})
    setContacts(newContacts)
    setSelected(newSelected)
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
