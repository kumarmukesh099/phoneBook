const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user: {
        type: Object,     //what type of it is // we can do it directly like mongoose.Schema.Types.ObjectId
        ref: 'users'                             //reference is defined which model it is using
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('contact', contactSchema);