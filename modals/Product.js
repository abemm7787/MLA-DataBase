const mongoose = require("mongoose")
// user login schema
// links to databse 
const userScheme = new mongoose.Schema({

    title:{ type: string, required: true, unique: true},
    desc:{ type: String, required: true, unique: true},
    password:{type: String, required: true },
    img:{type: String, required: true },
    img:{type: String, required: true },
    img:{type: String, required: true },
},
{timestamps:true}
);

module.exports = mongoose.nodel("Product", userScheme)