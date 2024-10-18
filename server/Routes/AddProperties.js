const express = require('express')
const router = express.Router()
const properties = require("../models/Properties")
const {body, validationResult} = require('express-validator')

router.post("/addproperty", [
    body("landmark"), 
    body("street"),
    body("city"),
    body("pincode")
], 
async(req,res) => {
    const error=validationResult(req);
    if(!error.isEmpty()) {
        return res.status(400).json("There is an error occured")
    }
    try {
        await properties.create({
            landmark:req.body.landmark,
            street:req.body.street,
            city:req.body.city,
            pincode:req.body.pincode
        })
        res.json("Property created successfully");
    }
    catch (error) {
        console.log(error);
    }
})
module.exports = router;
