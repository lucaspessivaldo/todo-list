const passwordValidation = require('../utils/passwordValidation')
const emailValidation = require('../utils/emailValidation')


//@POST /api/register
const registerUser = (req, res) => {
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

  res.status(200).json({message: 'ok'})
}


module.exports = {
  registerUser
}