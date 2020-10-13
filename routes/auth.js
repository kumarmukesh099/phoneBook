const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const User = require('../models/User');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');


// @route    POST api/auth
//@desc      Auth User and Get Token
// @access   Public
router.post('/',[
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter the correct password').exists()
], async(req,res) =>{

    let errors =  validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()});
    }
    const {email , password} = req.body;

    try{
        let user = await User.findOne({email});

        if(!user) return res.status(404).json({msg: 'Invalid Credentials'})

        const isMatch = await bycrypt.compare(password,user.password);

        if(!isMatch) return res.status(404).json({msg: 'Invalid Credentials'})

        let payload ={
            user : {
                id : user.id
            }
        }
        let token = jwt.sign(payload,config.get('jwt_secret')); 
         res.json({token})

    }
    catch(err){
        console.log("Error Message =>", err.message);  
        return res.status(500).send('Server Error');
    }
})

// @route    GET api/auth
//@desc      Get loggedin user
// @access   Private
router.get('/',auth,async(req,res) =>{
    try {
        let user = await User.findById(req.user.id).select('-password');
        console.log(user);

        res.send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg:"Server Error"});
    }
})  

module.exports = router