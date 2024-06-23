const express = require("express")
const app = express();
const itemRoutes = require("./itemRoutes")
const authRoutes = require("./authRoutes");
app.use("/auth", authRoutes)
app.use("/items", itemRoutes)

module.exports = app