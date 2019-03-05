var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const NoticeBoardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    notice: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    PublishedBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tenant_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Tenants'
    } 
});

module.exports = NoticeBoardSchema;