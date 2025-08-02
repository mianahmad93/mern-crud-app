const express = require('express')
const { enquiry_insert, enquiry_list, enquiry_del, enquiry_Find, enquiry_update } = require('../../controllers/website/enquiryController')
const enquiry_Routes = express.Router()

enquiry_Routes.post('/enquiry-insert', enquiry_insert);

enquiry_Routes.get('/enquiry-list', enquiry_list);

enquiry_Routes.delete('/enquiry-del/:id', enquiry_del);

enquiry_Routes.get('/enquiry-find/:id', enquiry_Find);

enquiry_Routes.put('/enquiry-update/:id', enquiry_update)

module.exports = enquiry_Routes;