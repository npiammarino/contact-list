import{useState} from 'react'

const DisplayContact = ({contact}) => {

  if(!contact){return null}

  return(
    <div className='contact'>
      <h3>Contact:  {contact.firstName + (contact.firstName ? " " : "") + contact.lastName}</h3>
      <h3>
        Company Name: {(contact.companyName ? contact.companyName : " NA")}
      </h3>
      <h3>Phone:  {contact.phone}</h3>
      <h3>Email:  {contact.email}</h3>
      <h3>Street Address:  {(contact.address && contact.city && contact.state && contact.zip ?
          contact.address + " " + contact.city + " " + contact.state + " " + contact.zip :
          '  **incomplete**')}
      </h3>
    </div>
  )
}

export default DisplayContact
