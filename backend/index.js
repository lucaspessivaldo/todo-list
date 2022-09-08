const express = require('express')

const port = process.env.PORT || 5000
const app = express()



app.listen(port, () => {
  console.log(`The serve is running on port ${port}`)
})