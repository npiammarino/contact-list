const express= require('express')
const {addUser,loginUser,getUserData}= require('../controllers/userControllers')

const router= express.Router()

router.route('/').post(addUser)
router.route('/login').post(loginUser)
router.route('/userData').get(getUserData)

module.exports= router
