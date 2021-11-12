const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    business_name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    city:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String
    },
    date_added:{
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('user',UserSchema);