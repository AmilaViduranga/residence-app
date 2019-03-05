var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    documentName: {
        type: String,
        required: true
    },
    documentType: {
        type: String,
        required: true
    },
    documentPath: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }    
});

module.exports = DocumentSchema;