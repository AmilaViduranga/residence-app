var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    address_line1: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address_line2: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    principalId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    },
    userName: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    },
    password: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    }
})

module.exports = UserSchema;