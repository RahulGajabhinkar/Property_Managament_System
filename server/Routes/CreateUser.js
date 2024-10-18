const express=require('express')
const router = express.Router()
const user=require('../models/Users')
const {body, validationResult} = require('express-validator')

router.post("/createuser", [
    body('name', "Name must be atleast 5 characters").isLength({ min: 5 }),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 characters'),
    body('password').matches(/\d/).withMessage('Password must contain at least one number'),
    body('password').matches(/[A-Z]/).withMessage('Password must contain at least oneuppercase letter'),
    body('password').matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
    ],
     async(req,res) => {
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({error:error.array()});
            }
    try{
        const em=req.body.email;
        const userExist=await user.findOne({email:em})
        if(userExist)  {
            return
        }
           
        await user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            contactNo : req.body.contactNo,
            landmark:req.body.landmark,
            city:req.body.city,
            street: req.body.street,
            pincode: req.body.pincode

        })
        res.json({success:true});
    }
    catch (error){
        console.log(error);
    }
})

router.post("/loginuser", 
    async(req, res) => {
        let email=req.body.email;
        try {
            let userData =  await user.findOne({email});
            console.log(userData);
            if(!userData) {
                return res.json({error:"Invalid email ID"})
            }
            if(req.body.password != userData.password)
                return res.json({error:"Invalid password"})
            res.json({success:true})
        }
        catch(error) {
            console.log(error);
        }
    }
)
module.exports = router;
