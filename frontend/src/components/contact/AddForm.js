import {useState} from 'react'

const AddForm= ({onAdd, fillContact, onEdit, editing, onUpdate}) => {
  const [formData, setFormData]= useState({
    firstName: '',
    lastName: '',
    companyName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  const {firstName, lastName, companyName, phone, email, address, city, state, zip} = formData

  const clearFields= () => {
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  const onChange= (e) => {
    e.preventDefault()

    setFormData(prevState => ({...prevState, [e.target.id]: e.target.value}))
  }
  //(prevState) => ({...prevState,[e.target.name]: e.target.value})

  const onSubmit= (e) => {
    e.preventDefault()

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

  const updateFields= () => {

  }

  return(
    <form className='add-form-container' onSubmit={onSubmit}>

      {/*first Name */}
      <div className='form-control'>
        <label>First Name</label>
        <input
          type='text'
          placeholder='Bob'
          id= "firstName"
          value={firstName}
          onChange={onChange}/>
      </div>

      {/*last name*/}
      <div className='form-control'>
        <label>Last Name</label>
        <input
          type='text'
          id="lastName"
          placeholder='Robertson'
          value={lastName}
          onChange={onChange}
        />
      </div>

      {/*company name*/}
      <div className='form-control'>
        <label>Company Name</label>
        <input
          type='text'
          id='companyName'
          placeholder='BBB LLC'
          value={companyName}
          onChange={onChange}
        />
      </div>

      {/*phone number*/}
      <div className='form-control'>
        <label>Phone</label>
        <input
          type='text'
          id='phone'
          placeholder='1 111 111-1111'
          value={phone}
          onChange={onChange}
        />
      </div>

      {/*email address*/}
      <div className='form-control'>
        <label>Email</label>
        <input
          type='text'
          id='email'
          placeholder='bob@robertson.eml'
          value={email}
          onChange={onChange}
        />
      </div>

      {/*address*/}
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          id='address'
          placeholder='12345 Elm Street'
          value={address}
          onChange={onChange}
        />
      </div>

      {/*city*/}
      <div className='form-control'>
        <label>City</label>
        <input
          type='text'
          id='city'
          placeholder='Bobtown'
          value={city}
          onChange={onChange}
        />
      </div>

      {/*state*/}
      <div className='form-control'>
        <label>State</label>
        <input
          type='text'
          id='state'
          placeholder='OH'
          value={state}
          onChange={onChange}
        />
      </div>

      {/*zip*/}
      <div className='form-control'>
        <label>Zip</label>
        <input
          type='text'
          id='zip'
          placeholder='12345-6789'
          value={zip}
          onChange={onChange}
        />
      </div>
      <div className='form-control'/>

      {/*new contact*/}
      <input type='submit' value= 'New Contact' className='form-control button btn-block' />
      {/*clear fields*/}
      <input type='button' value= 'Clear' onClick={clearFields} className='form-control button btn-block' />
    </form>

  )
}

export default AddForm
