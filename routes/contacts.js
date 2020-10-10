const express = require('express');
const router = express.Router();


// @route    GET api/contacts
//@desc      Get all users contacts
// @access   Private
router.get('/',(req,res) =>{
    res.send("Get all Contacts")
})


// @route    GET api/contacts
//@desc      Get all users contacts
// @access   Private
router.get('/',(req,res) =>{
    res.send("Get all contacts")
})

// @route    POST api/contacts
//@desc      Add a new contact
// @access   Private
router.post('/',(req,res) =>{
    res.send("Add a new contact")
})

// @route    PUT api/contacts/:id
//@desc      Update existing contact
// @access   Private
router.put('/',(req,res) =>{
    res.send("Updating existing contact")
})

// @route    DELETE api/contacts/:id
//@desc      DELETE contact
// @access   Private
router.delete('/',(req,res) =>{
    res.send("Delete contact")
})

module.exports = router