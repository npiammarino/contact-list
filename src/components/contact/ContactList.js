import{useState} from 'react'

const ContactList= ({contacts, onSelect, editing, selected}) => {

  const onChange= (e) => {
    //e.preventDefault()
    const newId= e.target.value
    const newSelected= contacts.find(x => x._id === newId)
    onSelect(newSelected)
  }

  if(!contacts || !selected){return null}

  return(
    <div>
      <select
        value={selected._id}
        size='12'
        className='contactList'
        onChange={onChange}
        disabled={editing ? true : null}
      >
        {contacts.map((contact) => (
          <option key={contact._id} value={contact._id}>
            {
              contact.lastName +
              (contact.firstName ? ", " : "") +
              contact.firstName
            }
          </option>
        ))}
      </select>
    </div>
  )
}

export default ContactList
