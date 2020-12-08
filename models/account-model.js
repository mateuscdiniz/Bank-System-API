const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    account: {
        type: Number,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        default: 0,
        required: true,
        trim: true
    },
    admin: {
        type: String,
        default: false
    },
    cpf: {
        type: Number,
        minLength: 11,
        maxLength: 11,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Account', AccountSchema);
