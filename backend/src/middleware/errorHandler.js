const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode || 500
  res.status(statusCode)

  return res.json({
    "success": false,
    "data": {},
    "message": error.message
  })
}

module.exports = errorHandler