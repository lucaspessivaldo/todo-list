
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
}


module.exports = {
  registerUser
}