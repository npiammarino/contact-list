const express= require('express')
const router= express.Router()
const{getContacts, addContact, updateContact, removeContact}= require('../controllers/contactControllers')

router.route('/:list').get(getContacts).post(addContact)
router.route('/:id').put(updateContact).delete(removeContact)

module.exports= router
