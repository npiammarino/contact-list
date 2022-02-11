const lists= require('../contactLists.json')
const fs= require('fs')

const getContacts= (req, res) => {
  const list= req.params.list
  console.log('start parse');
  res.json(lists[list])
  console.log('end parse');
}

const addContact= (req, res) => {
  const newContact= req.body
  const list= req.params.list
  newLists= lists[list].push(newContact)
  fs.writeFile(newLists, lists)
  res.send("got it")
}

const updateContact= (req, res) => {
  res.status(200).json({message: `Update Contact #${req.params.id}`})
}

const removeContact= (req, res) => {
  res.status(200).json({message: `Remove Contact #${req.params.id}`})
}

module.exports= {getContacts, addContact, updateContact, removeContact}
