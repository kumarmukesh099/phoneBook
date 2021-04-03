const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const { findByIdAndUpdate } = require('../models/Contact');


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
router.put('/:id',auth, async(req, res) => {
    try {
        let findUser = await Contact.findById(req.params.id);
        if(!findUser) {
            return res.status(404).json({msg : "User not found"});
        }
        let data = {};
        if(req.body.name) data.name = req.body.name;
        if(req.body.email) data.email = req.body.email;
        if(req.body.phone) data.phone = req.body.phone;
        if(req.body.type) data.type = req.body.type;
        await Contact.findByIdAndUpdate(req.params.id,data)
        res.status(200).json({msg : "Contact Updated"});
    } catch (error) {
        return res.status(500).send('Server Error');
    }
})

// @route    DELETE api/contacts/:id
//@desc      DELETE contact
// @access   Private
router.delete('/:id', auth ,async (req, res) => {
    try {
        let findUser = await Contact.findById(req.params.id);
        if(!findUser) {
            return res.status(404).json({msg : "User not found"});
        }
        await Contact.f(req.params.id)
        Contact.remove({_id :req.params.id })
        res.status(200).json({msg : "Contact Deleted"});
    } catch (error) {
        return res.status(500).send('Server Error');
    }
})


module.exports = router