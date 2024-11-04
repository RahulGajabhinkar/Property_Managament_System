const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(5000, (req, res) =>{
    res.send("app is listening on port number 5000")
})


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Properties = require('./models/Properties'); 
// const db = require('./db'); 
// const CreateUserRoutes = require("./Routes/CreateUser"); 
// const dotenv = require("dotenv");
// const propertyRoutes = require("./Routes/propertyRoutes");

// dotenv.config();
// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect("mongodb+srv://rahulgajabhinkar19:Rahul@stayease.qawkhct.mongodb.net/student")
//     .then(() => {
//         console.log("Connected to database");
//     })
//     .catch(err => console.log(err));

// // Basic route
// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

// app.post('/api/addproperty', async (req, res) => {
//     try {
//         const newProperty = new Properties(req.body);
//         await newProperty.save();
//         res.status(201).json(newProperty);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error saving property");
//     }
// });


// app.use("/api/createuser",CreateUserRoutes)


// // Route to fetch properties

// app.use("/api", propertyRoutes);


// app.get('/api/properties', async (req, res) => {
//     try {
//         const properties = await Properties.find();
//         res.json(properties);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error fetching properties");
//     }
// });

// app.use("/api", CreateUserRoutes);

// app.post("/create-payment-intent", async (req, res) => {
//     try {
//       const { amount } = req.body;
//       console.log("Creating payment intent for amount:", amount); // log for debugging
  
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount, // amount in cents
//         currency: "usd",
//       });
  
//       res.send({
//         clientSecret: paymentIntent.client_secret,
//       });
//     } catch (error) {
//       console.error("Error creating payment intent:", error); // log the error
//       res.status(500).send({ error: error.message });
//     }
//   });
  