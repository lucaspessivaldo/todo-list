const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const passwordValidation = require('../utils/passwordValidation')
const emailValidation = require('../utils/emailValidation')

//@POST /api/register
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body

  if (!name) {
    res.status(400)
    throw new Error('Name is required')
  }

  if (!email) {
    res.status(400)
    throw new Error('Email is required')
  }

  if (!password) {
    res.status(400)
    throw new Error('Password is required')
  }

  if (!passwordValidation(password)){
    res.status(400)
    throw new Error('Password - invalid')
  }

  if (!emailValidation(email)){
    res.status(400)
    throw new Error('Email - invalid')
  }

  const user = await User.findOne({email: email})

  if (user) {
    res.status(400)
    throw new Error('User email already exists')
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
      token: token,
      name: newUser.name,
    },
    "message": null
  })
})

module.exports = {
  registerUser
}