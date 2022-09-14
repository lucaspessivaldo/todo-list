const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const loginController = async (req, res) => {
  const {email, password} = req.body

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

  const user = await User.findOne({email: email})

  if (!user) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "User not found"
    })
  }

  const checkPassword = await bcrypt.compare(password, user.password)

  if(!checkPassword) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "password invalid"
    })
  }

  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '10h' })
  res.status(200).json({
    "success": true,
    "data": {
      token
    },
    "message": null
  })
}

module.exports = loginController