const enquiryModel = require("../../models/enquiry.model");

const enquiry_insert = (req, res) => {
    let { name, email, phone, message } = req.body;

    let enquiry = new enquiryModel({
        name: name,
        email: email,
        phone: phone,
        message: message
    })

    enquiry.save().then(() => {
        res.send({ status: 1, message: "Enquiry Saved SuccessFully!" })
    }).catch((err) => {
        res.send({ status: 0, message: "Error while Saved Enquiry!", error: err })
    })
}


const enquiry_list = async (req, res) => {
    const enquiry = await enquiryModel.find();

    res.send({ status: 1, message: 'Data receieved', enquiry: enquiry })
}


const enquiry_del = async (req, res) => {
    const enId = req.params.id;

    const enquiry = await enquiryModel.deleteOne({ _id: enId })
    res.send({ status: 1, message: "Deleted SuccessFully!", enquiry })
}


const enquiry_Find = async (req, res) => {
    const enId = req.params.id;

    const enquiry = await enquiryModel.findOne({ _id: enId })
    res.send({ status: 1, enquiry })
}


const enquiry_update = async (req, res) => {
    const enId = req.params.id;
    let { name, email, phone, message } = req.body;

    const resObj = {
        name, email, phone, message
    }

    let UpdateRes = await enquiryModel.updateOne({ _id: enId }, resObj)

    res.send({ status: 1, message: "Update SuccessFully", UpdateRes })

}


module.exports = { enquiry_insert, enquiry_list, enquiry_del, enquiry_Find, enquiry_update }

