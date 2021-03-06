

const AddForm= ({formData, updateField}) => {

  if(!formData){return(<></>)}
  const {firstName, lastName, companyName, phone, email, address, city, state, zip} = formData

  const onChange= (e) => {
    e.preventDefault()
    updateField(e.target.id, e.target.value)
  }

  return(
    <>
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
    </>
  )
}

export default AddForm
