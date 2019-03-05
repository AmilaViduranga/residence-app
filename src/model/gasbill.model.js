var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const GasSchema = new Schema({
    bill_date: {
        type: Date,
        required: true
    },
    account_id: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    usage: {
        type: String,
        required: true
    },
    outstanding: {
        type: Number
    },
    message: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    unit_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Unit'
    },
    PublishedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    } 
})

module.exports = GasSchema;