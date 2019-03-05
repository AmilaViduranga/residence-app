var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TenantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    domain: {
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
    longitude: {
        type: String,
        required: true
    },
    latitude: {
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
    admin_user_id: {
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

module.exports = TenantsSchema;