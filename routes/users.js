const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const User = require('../models/User');
const bycrypt = require('bcryptjs')


// @route    POST api/users
//@desc      Register a user
// @access   Public
router.post('/',[
check('name' , 'Please add your name').not().isEmpty(),
check('email', 'Please enter a valid email').isEmail(),
check('password', 'Please enter a password of 6 or more characters').isLength({min:6})

],async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    const {name , email , password} = req.body;

    try {

        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({msg: 'User already exists'})
        }

        user = new User({           //here we created a new instance
            name:name,
            email,
            password
        });

        const salt = await bycrypt.genSalt(10);

        user.password = await bycrypt.hash(password,salt)

        await user.save(); 

        res.send("User Saved")
        
    } catch (error) {
        console.log("Error Message =>", error.message);  
        return res.status(500).send('Server Error');
    }
})

module.exports = router