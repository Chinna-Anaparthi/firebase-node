const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    firstName: { 
        type: String,
        required: true,
    },
    lastName: { 
        type: String,
        required: true,
    }
});

const userData = mongoose.model("userData", userSchema);
module.exports = userData;
