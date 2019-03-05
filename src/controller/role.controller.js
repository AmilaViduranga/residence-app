var mongoose = require('../DBConfig');
var roleModel = mongoose.model('Role');

var RoleController = function() {
    this.createRole = (data) => {
        return new Promise((resolve, reject) => {
            console.log(data);
            var role = new roleModel({
                menus: data.menus
            })
            role.save().then(response => {
                resolve({status: 200, message: "successfully create role", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }
}

module.exports = new RoleController();