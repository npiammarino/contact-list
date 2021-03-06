const Contact= require('../models/contactModel')
const asyncHandler= require('express-async-handler')

const getContacts= asyncHandler (async (req, res) => {
  const contacts= await Contact.find({user: req.user.id})
  res.status(200).json(contacts)
})

const addContact= asyncHandler (async (req, res) => {
  const contact= req.body
  if(Object.keys(contact).length === 0){
    res.status(400)
    throw new Error("Please include contact information")
  }
  const newContact= await Contact.create({
    user: req.user.id,
    firstName: contact.firstName,
    lastName: contact.lastName,
    companyName: contact.companyName,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
    city: contact.city,
    state: contact.state,
    zip: contact.zip,
  })

  res.status(201).json(newContact)
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

  if(contact.user.valueOf() !== req.user.id){
    res.status(400)
    throw new Error("Not authorized to edit this contact")
  }

  const updatedContact= await contact.updateOne(req.body)

  if(!updatedContact){
    res.status(400)
    throw new Error("Problem updating in database")
  }

  res.status(200).json(updatedContact)
})

const removeContact= asyncHandler (async (req, res) => {
  const contact= await Contact.findById(req.params.id)

  if(!contact){
    res.status(400)
    throw new Error("No such contact found")
  }

  if(contact.user.valueOf() !== req.user.id){
    res.status(400)
    throw new Error("Not authorized to edit this contact")
  }

  const deleted=  await Contact.deleteOne(contact)

  if(!deleted){
    res.status(400)
    throw new Error("Error removing contact")
  }

  res.status(200).json(deleted)
})

module.exports= {getContacts, addContact, updateContact, removeContact}
