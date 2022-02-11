const Contact= require('../models/contactModel')

const getContacts= async (req, res) => {
  const contacts= await Contact.find({})
  res.status(200).json(contacts)
}

const addContact= async (req, res) => {

  const contact= await Contact.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  })

  res.status(200).json(contact)
}

const updateContact= async (req, res) => {
  console.log('init');
  const updatedContact= await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
  console.log('updated');
  res.status(200).json(updatedContact)
}

const removeContact= async (req, res) => {
  const deletedContact= await Contact.findByIdAndRemove(req.params.id)
  res.status(200).json(deletedContact)
}

module.exports= {getContacts, addContact, updateContact, removeContact}
