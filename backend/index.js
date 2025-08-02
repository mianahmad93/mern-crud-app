const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')
const enquiry_Routes = require('./App/routes/website/enquiryRoutes')
app.use(express.json())
app.use(cors())
require('dotenv').config()

// Routes
app.use('/api',enquiry_Routes) 


// Connect to MongoDB
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('MongoDB Connected!');
}).catch((err) => {
    console.log(err);

})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`)
})