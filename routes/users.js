const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const User = require('../models/User');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');



// @route    POST api/users
//@desc      Register a user
// @access   Public
router.post('/',[
check('name' , 'Please add your name').not().isEmpty(),
check('email', 'Please enter a valid email').isEmail(),
check('password', 'Please enter a password of 6 or more characters').isLength({min:6})

],async(req,res) =>{
    console.log("boyu",req.body)
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

        const payload = {
            user : {
                id : user.id
            }
        }

        let token = jwt.sign(payload,config.get('jwt_secret'),{     //in third parameter we pass the option, here we pass the time of expiration of token
            expiresIn : 360000
        }) 

        res.json({token})
        
    } catch (error) {
        console.log("Error Message =>", error.message);  
        return res.status(500).send('Server Error');
    }
})

module.exports = router