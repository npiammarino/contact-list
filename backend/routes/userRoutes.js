const express= require('express')
const {addUser,loginUser}= require('../controllers/userControllers')

const router= express.Router()

router.route('/').post(addUser)
router.route('/login').get(loginUser)

module.exports= router
