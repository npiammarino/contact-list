const express= require('express')
const router= express.Router()
const{getContacts, addContact, updateContact, removeContact}= require('../controllers/contactControllers')
const protect= require('../middleware/authMiddleware')

router.route('/').get(protect, getContacts).post(protect, addContact)
router.route('/:id').put(protect, updateContact).delete(protect, removeContact)

module.exports= router
