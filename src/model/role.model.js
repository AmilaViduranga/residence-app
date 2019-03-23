var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const RoleSchema = new Schema ({
    menus: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    crud: {
        type: Map,
        of: Boolean
    }
});

module.exports = RoleSchema;