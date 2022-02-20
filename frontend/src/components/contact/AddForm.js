import {useState} from 'react'

const AddContact= ({onAdd, fillContact, onEdit, editing, onUpdate}) => {
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [companyName, setCompanyName]= useState('')
  const [phone, setPhone]= useState('')
  const [email, setEmail]= useState('')
  const [address, setAddress]= useState('')
  const [city, setCity]= useState('')
  const [state, setState]= useState('')
  const [zip, setZip]= useState('')

  const clearFields= () => {
    setFirstName('')
    setLastName('')
    setCompanyName('')
    setPhone('')
    setEmail('')
    setAddress('')
    setCity('')
    setState('')
    setZip('')

    if(editing){onEdit()}
  }
  const updateFields= () => {
    setLastName(fillContact.lastName)
    setFirstName(fillContact.firstName)
    setCompanyName(fillContact.companyName)
    setPhone(fillContact.phone)
    setEmail(fillContact.email)
    setAddress(fillContact.address)
    setCity(fillContact.city)
    setState(fillContact.state)
    setZip(fillContact.zip)
    onEdit()
  }
  const onSubmit= (e) => {
    e.preventDefault()

    if(!lastName && !companyName){
      alert("Please provide a last name or a company name.");
      return;
    }
    onAdd({firstName, lastName, companyName, phone, email, address, city, state, zip});
    clearFields();
  }
  const updateContact= (e) => {
    e.preventDefault()

    if(!lastName && !companyName){
      alert("Please provide a last name or a company name.");
      return;
    }
    onUpdate({firstName, lastName, companyName, phone, email, address, city, state, zip});
    clearFields();
  }

  return(
    <form className='add-form' onSubmit={onSubmit}>

      {/*first Name */}
      <div className='form-control'>
        <label>First Name</label>
        <input
          type='text'
          placeholder='Bob'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}/>
      </div>

      {/*last name*/}
      <div className='form-control'>
        <label>Last Name</label>
        <input
          type='text'
          placeholder='Robertson'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      {/*company name*/}
      <div className='form-control'>
        <label>Company Name</label>
        <input
          type='text'
          placeholder='BBB LLC'
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      {/*phone number*/}
      <div className='form-control'>
        <label>Phone</label>
        <input
          type='text'
          placeholder='1 111 111-1111'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/*email address*/}
      <div className='form-control'>
        <label>Email</label>
        <input
          type='text'
          placeholder='bob@robertson.eml'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/*address*/}
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          placeholder='12345 Elm Street'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/*city*/}
      <div className='form-control'>
        <label>City</label>
        <input
          type='text'
          placeholder='Bobtown'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/*state*/}
      <div className='form-control'>
        <label>State</label>
        <input
          type='text'
          placeholder='OH'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      {/*zip*/}
      <div className='form-control'>
        <label>Zip</label>
        <input
          type='text'
          placeholder='12345-6789'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
      <div className='form-control'/>

      {/*new contact*/}
      <input type='submit' value= 'New Contact' className='form-control button btn-block' />
      {/*clear fields*/}
      <input type='button' value= 'Clear' onClick={clearFields} className='form-control button btn-block' />
      {/*edit contact*/}
      <input type='button'
        value= {editing ? 'Cancel' : 'Edit Contact'}
        onClick={(editing ? clearFields : updateFields)}
        style= {{background: (editing ? '#e83610' : null)}}
        className='form-control button btn-block'
        />
      {/*update contact*/}
      <input type='button' value= 'Update Contact' onClick={updateContact}
        style= {{background: (!editing ? '#a0a1a1' : null)}}
        className= 'form-control button btn-block'
        disabled={!editing ? true : false}
        />

    </form>

  )
}

export default AddContact
