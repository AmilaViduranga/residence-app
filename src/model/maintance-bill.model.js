var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MaintanceBillSchema = new Schema({
    receipt_no: {
        type: String,
        required: true
    },
    issue_date: {
        type: Date,
        required: true
    },
    received_from: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    },
    outstanding: {
        type :Number,
        required: true
    },
    bill_from: {
        type: Date,
        required: true
    },
    bill_to: {
        type :Date,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    PublishedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    unit_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Unit'
    } 
})

module.exports = MaintanceBillSchema;