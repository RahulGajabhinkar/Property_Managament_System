const express = require('express')
const mongoose = require('mongoose')
const createUser = require('./Routes/CreateUser')
const propertyRoutes  = require('./Routes/propertyRoutes')
require('dotenv').config();
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.Mongo_URI)
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => console.log(err));


app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use('/api', createUser); 
app.use('/api', propertyRoutes)
app.listen(8001, (req, res) => {
    console.log("app is listening on port 8001")
})
