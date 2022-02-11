const Contact= require('../models/contactModel')
const asyncHandler= require('express-async-handler')

const getContacts= asyncHandler (async (req, res) => {
  const contacts= await Contact.find({})
  res.status(200).json(contacts)
})

const addContact= asyncHandler (async (req, res) => {
  if(Object.keys(req.body).length === 0){
    res.status(400)
    throw new Error("Please include contact information")
  }

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

  res.status(201).json(contact)
})

const updateContact= asyncHandler (async (req, res) => {
  const contact= await Contact.findById(req.params.id)

  if(!contact){
    res.status(400)
    throw new Error("No such contact found")
  }

  if(Object.keys(req.body).length === 0){
    res.status(400)
    throw new Error("Please include novel contact information")
  }

  const updatedContact= await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json(updatedContact)
})

const removeContact= asyncHandler (async (req, res) => {
  const contact= await Contact.findById(req.params.id)

  if(!contact){
    res.status(400)
    throw new Error("No such contact found")
  }
  const deletedContact= await Contact.findByIdAndRemove(req.params.id)
  res.status(200).json(deletedContact)
})

module.exports= {getContacts, addContact, updateContact, removeContact}
