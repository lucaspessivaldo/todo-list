function passwordValidation(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return password.match(passwordRegex)
}

module.exports = passwordValidation
