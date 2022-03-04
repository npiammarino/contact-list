import AddForm from '../components/contact/AddForm'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const UpdateContact= ({user, onUpdate, contact}) => {
  const [formData, setFormData]= useState(contact)
  const navigate= useNavigate()

  const updateField= (id, value) => {
    setFormData(prevState => ({...prevState, [id]: value}))
  }

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

  const onCancel= () => {
    clearFields()
    navigate('/')
  }

  const onSubmit= async (e) => {
    e.preventDefault()

    const res= await fetch(`http://localhost:3000/api/contacts`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${user}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const newContact= await res.json()
    clearFields()
    navigate('/')
    onUpdate(contact, newContact)
  }

  return (
    <div className= 'form-container add-form'>
      <h1>Add Contact</h1>
      <form className='form-fields' onSubmit={onSubmit}>
        <AddForm formData={formData} updateField={updateField} />
        {/*new contact*/}
        <button type='submit' className='btn btn-add'>New Contact </button>
        {/*clear fields*/}
        <button onClick={clearFields} className='btn btn-add'>Clear</button>
        {/*cancel*/}
        <button onClick={onCancel} className='btn btn-add'>Cancel</button>
      </form>
    </div>
  )
}

export default UpdateContact
