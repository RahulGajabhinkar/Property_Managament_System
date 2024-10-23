const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Properties = require('./models/Properties'); // Ensure this points to the correct file
const db = require('./db'); // Make sure this is defined and functional
const CreateUserRoutes = require("./Routes/CreateUser"); // Corrected import for user routes

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://rahulgajabhinkar19:Rahul@stayease.qawkhct.mongodb.net/student")
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => console.log(err));

// Basic route
app.get("/", (req, res) => {
    res.send("Hello world");
});

// Route to add a property
app.post('/api/addproperty', async (req, res) => {
    try {
        const newProperty = new Properties(req.body);
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving property");
    }
});

// Route to fetch properties
app.get('/api/properties', async (req, res) => {
    try {
        const properties = await Properties.find();
        res.json(properties);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching properties");
    }
});

// User routes
app.use("/api", CreateUserRoutes);

// Start server
app.listen(port, () => {
    console.log("Server is running on port 5000");
});
