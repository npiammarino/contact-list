const express= require('express')
const {addUser,loginUser,getUserData}= require('../controllers/userControllers')
const protect= require('../middleware/authMiddleware')

const router= express.Router()

router.route('/').post(addUser)
router.route('/login').post(loginUser)
router.route('/userData').get(protect, getUserData)

module.exports= router
