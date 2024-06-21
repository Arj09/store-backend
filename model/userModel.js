const mongoose = require('mongoose')

const userSChema = mongoose.Schema({

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
    mobile_no : {
        type : Number,
    },
    state:{
        type : String,
    },
    distrit:{
        type : String,
    },
    pin_no:{
        type : Number,
    },
    address:{
        type : String,
    },
    address1:{
        type : String,
    }
},{
    timestamps : true
})

module.exports = mongoose.model("bloguser", userSChema)