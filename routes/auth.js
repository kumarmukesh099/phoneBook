const express = require('express');
const router = express.Router();


// @route    POST api/auth
//@desc      Auth User and Get Token
// @access   Public
router.post('/',(req,res) =>{
    res.send("Login User")
})

// @route    GET api/auth
//@desc      Get loggedin user
// @access   Private
router.get('/',(req,res) =>{
    res.send("Get loggedin User")
})  

module.exports = router