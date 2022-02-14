const User= require('../models/userModel')
const asyncHandler= require('express-async-handler')
const bcrypt= require('bcryptjs')

const addUser= asyncHandler (async (req, res) => {
  const {username, password}= req.body

  if(!username || !password){
    res.status(400)
    throw new Error("Please fill all fields")
  }

  const userExists= await User.findOne({username})
  if(userExists){
    res.status(400)
    throw new Error("Username already registered")
  }

  //hash password
  const salt= await bcrypt.genSalt(10)
  const hashedPW= await bcrypt.hash(password, salt)

  console.log(hashedPW)
  const user= await User.create({
    username,
    password: hashedPW
  })

  if(user){
    res.status(201).json({
      id: user._id,
      name: user.username
    })
  } else {
    res.status(400)
    throw new Error("User not created")
  }


})

const loginUser= asyncHandler (async (req, res) => {

})

module.exports= {
  addUser,
  loginUser
}
