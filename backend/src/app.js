const express = require("express");
const app = express();
require('dotenv').config()

const registerRoutes = require('./routes/registerRouter')
const loginRoutes = require('./routes/loginRouter')
const dashboardRouter = require('./routes/dashboardRouter')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => res.status(200).json({"success": true}))
app.use("/api/register", registerRoutes)
app.use("/api/login", loginRoutes)
app.use("/api/dashboard", dashboardRouter)
app.use(errorHandler)

module.exports = app;