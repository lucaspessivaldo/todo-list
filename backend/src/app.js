const express = require("express");
const app = express();
const registerRoutes = require('./routes/registerRouter')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => res.status(200).json({"success": true}))
app.use("/api/register", registerRoutes)

module.exports = app;