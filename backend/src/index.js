const app = require("./app")
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_LINK)
  .then(() => {
    app.listen(port, () => {
      console.log(`The serve is running on port ${port}`)
    })
})
