const getContacts= (req, res) => {
  res.status(200).json({message: "Get Contacts"})
}

const addContact= (req, res) => {
  res.status(200).json({message: "Add Contact"})
}

const updateContact= (req, res) => {
  res.status(200).json({message: `Update Contact #${req.params.id}`})
}

const removeContact= (req, res) => {
  res.status(200).json({message: `Remove Contact #${req.params.id}`})
}

module.exports= {getContacts, addContact, updateContact, removeContact}
