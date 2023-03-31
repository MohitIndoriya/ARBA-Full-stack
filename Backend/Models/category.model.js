const mongoose = require("mongoose");

let categoryschema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true
    },
    image: {
        type: String, required: true
    },
    owner: { type: mongoose.Types.ObjectId, ref: "User" },

});
let Category = mongoose.model("category", categoryschema);
module.exports = Category;
