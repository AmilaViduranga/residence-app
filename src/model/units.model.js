var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UnitsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    unit_identifier: {
        type: String,
        required: true
    },
    floor: {
        type: String,
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

module.exports = UnitsSchema;