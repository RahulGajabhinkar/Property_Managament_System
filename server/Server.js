const express= require('express') 
const app= express()
const port=5000
const db=require('./db')
const cors=require('cors')
const Properties = require('./models/Properties')

const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://rahulgajabhinkar19:Rahul@stayease.qawkhct.mongodb.net/student")
.then(
    async ()=>{
        console.log("connected to database")
    })
.catch((err)=>console.log(err))

app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(cors())
db();

app.get("/",(req,res) => {
  res.send("Hello world")
})
app.use(express.json())
app.use("/api", require("./Routes/AddProperties"))

app.get('/api/addproperty',async(req, res) => {
  try {
    console.log("this is me this i syou this is wll")
    const propertyList = await mongoose.connection.db.collection('properties')
    const data= await propertyList.find().toArray()
    res.json(data)
    console.log(data)
  }
  catch (err) {
    console.error(err)
    }
})
app.use("/api", require("./Routes/CreateUser"))
app.listen(port, () => {
  console.log("server is running on port 5000");
})