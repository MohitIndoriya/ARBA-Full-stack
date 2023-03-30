const mongoose = require("mongoose");

let userschema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true

    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },

    avatar: {
        type: String,
    },


});
let User = mongoose.model("user", userschema);
module.exports = User;
