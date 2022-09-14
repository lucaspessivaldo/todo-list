const express = require("express");
const app = express();
require('dotenv').config()

const registerRoutes = require('./routes/registerRouter')
const loginRoutes = require('./routes/loginRouter')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.get("/", (req, res) => res.status(200).json({"success": true}))
app.use("/api/register", registerRoutes)
app.use("/api/login", loginRoutes)

module.exports = app;