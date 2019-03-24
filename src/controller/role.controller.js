var mongoose = require('../DBConfig');
var roleModel = mongoose.model('Role');

var RoleController = function() {
    this.createRole = (data) => {
        return new Promise((resolve, reject) => {
            var role = new roleModel({
                menus: data.menus,
                name: data.name
            })
            role.save().then(response => {
                resolve({status: 200, message: "successfully create role", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.updateRole = (data,id)=> {
        return new Promise((resolve,reject) => {
            roleModel.findByIdAndUpdate(id, data, {new: true}, (err, response) =>{
                if (err) {
                    reject({status: err.code, message: err.errorDetail});
                }
                resolve({status: 200, message: "successfully updated role", data: response});
            })
        })
    }

    this.getAllRoles = () => {
        return new Promise((resolve,reject) => {
            roleModel.find().then(response => {
                resolve({status: 200, message: "successfully get roles", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.getSingleRole = (id) => {
        return new Promise((resolve,reject) => {
            roleModel.find({_id:id}).then(response => {
                resolve({status: 200, message: "successfully get roles", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.deleteRole = (id) => {
        return new Promise((resolve, reject) => {
            roleModel.remove({_id:id}).then(response => {
                resolve({status: 200, message: "successfully delete role", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.getRoleList = () => {
        return new Promise((resolve, reject) => {
            roleModel.find().then(response => {
                resolve({status: 200, message: "successfully get roles", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }
}

module.exports = new RoleController();