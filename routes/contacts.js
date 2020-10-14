const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');


// @route    GET api/contacts
//@desc      Get all users contacts
// @access   Private
router.get('/', auth, async(req,res)=>{
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 }) //recent 1
        res.json(contacts);
    } catch (error) {
        console.log("Error Message =>", err.message);
        return res.status(500).send('Server Error');
    }

})


// @route    GET api/contacts
//@desc      Get all users contacts
// @access   Private
router.get('/', (req, res) => {
    res.send("Get all contacts")
})

// @route    POST api/contacts
//@desc      Add a new contact
// @access   Private
router.post('/', auth, [
    check('name', 'Please add a name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('phone', 'Please enter a correct Indian Phone number').isMobilePhone("en-IN"),
    check('type', 'Please add the type of this contacts').not().isEmpty()

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const { name, email, phone, type } = req.body;
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        })
        newContact.save();
        res.json(newContact)


    } catch (error) {
        console.log("Error Message =>", err.message);
        return res.status(500).send('Server Error');
    }
})

// @route    PUT api/contacts/:id
//@desc      Update existing contact
// @access   Private
router.put('/', (req, res) => {
    res.send("Updating existing contact")
})

// @route    DELETE api/contacts/:id
//@desc      DELETE contact
// @access   Private
router.delete('/', (req, res) => {
    res.send("Delete contact")
})

module.exports = router