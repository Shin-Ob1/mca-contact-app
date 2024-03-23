const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: (true, "Please add contact name"),
    },
    phone: {
        type: String,
        required: (true, "Please add contact phone number"),
    },
    dateofbirth: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);