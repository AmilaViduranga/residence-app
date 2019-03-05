var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ComplaintManagementSchema = new Schema({
    complaint_no: {
        type: String,
        required: true
    },
    complaint_date: {
        type: Date,
        required: true,
        default: new Date()
    },
    complaint_message: {
        type: String,
        required: true
    },
    unit_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Unit'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    document_path: {
        type: String
    },
    subject: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    PublishedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = ComplaintManagementSchema;