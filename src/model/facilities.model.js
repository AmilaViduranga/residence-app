var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const FacilitiesSchema = new Schema({
    resourceType: {
        type: String,
        required: true
    },
    resourceTitle: {
        type: String,
        required: true
    },
    resourceLocation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time_from: {
        type: String,
        required: true
    },
    time_to: {
        type: String,
        required: true
    },
    crowd: {
        type: Number,
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
    } 
});

module.exports = FacilitiesSchema;