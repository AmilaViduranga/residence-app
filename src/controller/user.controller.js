var mongoose    = require("../DBConfig");
var userModel   = mongoose.model('User');
var bcrypt      = require('bcrypt');
var jwt         = require('jsonwebtoken');
var statics     = require("../globals");

var UserController = function() {
    this.createUser = (user) => {
        return new Promise((resolve, reject) => {
            userModel.find({userName: user.userName}).then(response => {
                if(response.length == 0) {
                    bcrypt.genSalt(10, (err,salt) => {
                        if(err) {
                            reject({status: err.code, message: err.errorDetail});
                        }
                        bcrypt.hash(user.password, salt,(err, hash)=> {
                            var newUser = new userModel({
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
                                status: user.status,
                                userName: user.userName,
                                password: hash
                            });
                            newUser.save().then(data => {
                                resolve({status: 200, message: "successfully signup user", data: data});
                            }).catch(err => {
                                console.log(err);
                                reject({status: err.code, message: err.errorDetail});
                            })
                        });
                    })
                } else {
                    reject({status:400, message: "User name already excist"});
                }
            })
        })
    }

    this.updateUser = (user, id) => {
        return new Promise((resolve,reject) => {
            userModel.findByIdAndUpdate(id, user, {new: true}, (err,  response) => {
                if (err) {
                    reject({status: err.code, message: err.errorDetail});
                }
                resolve({status: 200, message: "successfully updated user", data: response});
            })
        })
    }

    this.deleteUser = (id) => {
        return new Promise((resolve, reject) => {
            userModel.remove({_id:id}).then(response => {
                resolve({status: 200, message: "successfully delete user", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.getAllUsers = () => {
        return new Promise((resolve,reject) => {
            userModel.find().populate('principalId').select('-password').then(response => {
                resolve({status: 200, message: "successfully get users", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.getSingleUser= (id) => {
        return new Promise((resolve,reject) => {
            userModel.find({_id:id}).populate('principalId').select('-password').then(response => {
                resolve({status: 200, message: "successfully get roles", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.login = (authontication) => {
        return new Promise((resolve,reject) => {
            userModel.findOne({userName: authontication.username}).populate('principalId').then(instance => {
                bcrypt.compare(authontication.password, instance.password, (err,response) => {
                    if(response == true) {
                        var token = jwt.sign({ _id: instance._id, userName: instance.userName, first_name: instance.first_name, last_name: instance.last_name, role: instance.principalId}, statics.JWT_KEY);
                        resolve({ status: 200, message: "successfully log to system", data: {token: token, user_name: instance.first_name + " "+instance.last_name, _id: instance._id}});
                    } else {
                        reject({ status: 403, message: "Inalid login"})
                    }
                })
            }).catch(err=> {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }
}

module.exports = new UserController();