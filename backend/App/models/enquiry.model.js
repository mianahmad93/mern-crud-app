const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

let enquiryModel = mongoose.model('user_enquiry', enquirySchema);
module.exports = enquiryModel ;