const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    url:{
        type: String,
        required:true
    }
})

mongoose.model("Product",ProductSchema);

module.exports = {Product: mongoose.model("Product")};