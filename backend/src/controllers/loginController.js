const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email) {
    res.status(400)
    throw new Error('Email is required')
  }

  if (!password) {
    res.status(400)
    throw new Error('Password is required')
  }

  const user = await User.findOne({ email: email })

  if (!user) {
    res.status(400)
    throw new Error('User not found')
  }

  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    res.status(400)
    throw new Error('password invalid')
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' })

  res.status(200).json({
    "success": true,
    "data": {
      token: token,
      name: user.name
    },
    "message": null
  })
})

module.exports = loginController