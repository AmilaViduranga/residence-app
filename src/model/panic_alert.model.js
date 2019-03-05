var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PanicAllertSchema = new Schema({
    type: {
        type: String, 
        required: true
    },
    alert: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now() + 7*24*60*60*1000
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
})

module.exports = PanicAllertSchema;