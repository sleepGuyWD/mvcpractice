//todo - Declare variables
const express = require("express")
const app = express()
const mongoose =  require("mongoose")

require('dotenv').config({ path: './config/.env' });
const PORT = process.env.PORT

const connectDB = require("./config/database")
const homeRoutes = require('./routes/home')

//todo - Connect to Database
connectDB()

app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

//todo - Set Routes
app.use('/', homeRoutes)

app.listen(PORT, () => console.log(`Running on port ${PORT}`))