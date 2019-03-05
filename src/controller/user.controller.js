var mongoose = require("../DBConfig");
var userModel = mongoose.model('User');

var UserController = function() {
    this.create = (user) => {
        return new Promise((resolve, reject) => {
            var user = new userModel({
                first_name: user.first_name,
                last_name: user.last_name,
                address_line1: user.address_line1,
                country: user.country,
                city: user.city,
                address_line2: user.address_line2,
                postal_code: user.postal_code,
                state: user.state,
                nic: user.nic,
                telephone: user.telephone,
                mobile: user.mobile,
                principalId: user.roleId,
                status: user.status
            });
            user.save().then(data => {
                resolve({status: 200, message: "successfully signup user", data: data});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }
}

module.exports = new UserController();