const mongoose = require("mongoose")

// user login schema
// links to databse 
const OrderScheme = new mongoose.Schema({
    UserId: { type: String, required: true },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
},
{ timestamps: true }
);

module.exports = mongoose.nodel("Cart", CartScheme)