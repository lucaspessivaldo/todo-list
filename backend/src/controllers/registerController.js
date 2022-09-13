const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const passwordValidation = require('../utils/passwordValidation')
const emailValidation = require('../utils/emailValidation')


//@POST /api/register
const registerUser = async (req, res) => {
  const {name, email, password} = req.body

  if (!name) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "Name is required"
    })
  }

  if (!email) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "Email is required"
    })
  }

  if (!password) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "Password is required"
    })
  }

  if (!passwordValidation(password)){
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "Password - invalid"
    })
  }

  if (!emailValidation(email)){
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "Email - invalid"
    })
  }

  const user = await User.findOne({email: email})

  if (user) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "User email already exists"
    })
  }

  const hash = await bcrypt.hash(password, 10)
  
  const newUser = await User.create({
    name,
    email,
    password: hash
  })

  const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, { expiresIn: '10h' })
  res.status(201).json({
    "success": true,
    "data": {
      token
    },
    "message": null
  })
}


module.exports = {
  registerUser
}