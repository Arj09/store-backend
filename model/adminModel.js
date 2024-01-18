const mongoose = require('mongoose')

const adminSChema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please enter name "],
    },
    email: {
        type: String,
        required: [true, "please email id"],
        unique : [true, "email id has already register"]
    },
    password: {
        type: String,
        required: [true, "Please enter name "],
    },
},{
    timestamps : true
})

module.exports = mongoose.model("admin", adminSChema)