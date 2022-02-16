const User= require('../models/userModel')
const asyncHandler= require('express-async-handler')
const bcrypt= require('bcryptjs')
const jwt= require('jsonwebtoken')

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
  const user= await User.create({
    username,
    password: hashedPW,
  })

  if(user){
    res.status(201).json({
      id: user._id,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("User not created")
  }


})

const loginUser= asyncHandler (async (req, res) => {
  const input= req.body
  const user= await User.findOne({username: input.username})
  if(!user){
    res.status(400)
    throw new Error("User not found")
  }

  const verify= await bcrypt.compare(input.password, user.password)

  if(!verify){
    res.status(400)
    throw new Error("Invalid password")
  }

  res.status(200).json({token: generateToken(user._id)})

})

const getUserData= asyncHandler (async (req,res) => {
  const user = await User.findById(req.user.id)
  if(!user){
    res.status(400)
    throw new Error("User not found")
  }

  res.status(200).json(user)
})

const generateToken= (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn:'10d',
  })
}

module.exports= {
  addUser,
  loginUser,
  getUserData,
}
