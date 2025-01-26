const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: false

    }
},
    { timestamps: true }
);


const user1 = mongoose.model("user1", userSchema)

module.exports = user1;