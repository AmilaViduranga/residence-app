var mongoose =require("../DBConfig");
var gassBillModel = mongoose.model("GasBill");
var fileManager = require('./file_manager.controller');

var gasBillController = function() {
    this.insertGassBill = (gassBill) => {
        return new Promise((resolve,reject) => {
            if(gassBill.pay_slip) {
                fileManager.uploadFile(gassBill.pay_slip, 'public/gasbills/'+Date.now()).then(path => {
                    var newGassBill = new gassBillModel({
                        bill_date: gassBill.bill_date,
                        account_id: gassBill.account_id,
                        due_date: gassBill.due_date,
                        amount: gassBill.amount,
                        usage: gassBill.usage,
                        outstanding:gassBill.outstanding,
                        message: gassBill.message,
                        status:gassBill.status,
                        tenant_id: gassBill.tenant_id,
                        unit_id: gassBill.unit_id,
                        pay_slip: path,
                        publishedBy: gassBill.publishedBy
                    });
                    newGassBill.save().then(response => {
                        resolve({status: 200, message: "successfully create gas bill", data: response});
                    }).catch(err  => {
                        console.log(err);
                        reject({status: 500, message: err});
                    });
                })
            } else {
                var newGassBill = new gassBillModel({
                    bill_date: gassBill.bill_date,
                    account_id: gassBill.account_id,
                    due_date: gassBill.due_date,
                    amount: gassBill.amount,
                    usage: gassBill.usage,
                    outstanding:gassBill.outstanding,
                    message: gassBill.message,
                    status:gassBill.status,
                    tenant_id: gassBill.tenant_id,
                    unit_id: gassBill.unit_id,
                    publishedBy: gassBill.publishedBy
                });
                newGassBill.save().then(response => {
                    resolve({status: 200, message: "successfully create gas bill", data: response});
                }).catch(err  => {
                    console.log(err);
                    reject({status: 500, message: err});
                });
            }
        })
    }

    this.updateGassBill = (id,updatedGasBill) => {
        return new Promise((resolve,reject) => {
            try {
                if(updatedGasBill.pay_slip) {
                    let urlSplit = updatedGasBill.pay_slip.split(":");
                    if(urlSplit[0] == "data") {
                        fileManager.uploadFile(updatedGasBill.pay_slip, 'public/gasbills/'+Date.now()).then(path => {
                            updatedGasBill.pay_slip = path;
                            gassBillModel.findByIdAndUpdate(id,updatedGasBill,(err, response) => {
                                if (err) {
                                    console.log(err);
                                    reject({status: 500, message: err});
                                }
                                resolve({status: 200, message: "successfully updated gas bill", data: response});
                            })
                        })
                    } else {
                        gassBillModel.findByIdAndUpdate(id,updatedGasBill,(err, response) => {
                            if (err) {
                                console.log(err);
                                reject({status: 500, message: err});
                            }
                            resolve({status: 200, message: "successfully updated gas bill", data: response});
                        })
                    }
                } else {
                    gassBillModel.findByIdAndUpdate(id,updatedGasBill,(err, response) => {
                        if (err) {
                            console.log(err);
                            reject({status: 500, message: err});
                        }
                        resolve({status: 200, message: "successfully updated gas bill", data: response});
                    })
                }
            } catch(err) {
                reject({status: 500, message: err});
            }
        })
    }

    this.deleteGassBill = (id) => {
        return new Promise((resolve,reject) => {
            gassBillModel.remove({_id: id}).then(response =>  {
                resolve({status: 200, message: "successfully delete gas bill", data: response});
            }).catch(err => {
                reject({status: 500, message: err});
            })
        })
    }

    this.findAllGassBill = () => {
        return new Promise((resolve,reject) => {
            gassBillModel.find().populate("unit_id").populate('tenant_id').populate("publishedBy", {path:'published_by', model: 'User', select: '-password'}).then(response => {
                
                resolve({status: 200, message: "successfully get all gas bills", data: response});
            }).catch(err => {
                reject({status: 500, message: err});
            })
        })
    }

    this.findById = (id) => {
        return new Promise((resolve,reject) => {
            gassBillModel.find({_id: id}).populate("unit_id").populate('tenant_id').populate("publishedBy", {path:'published_by', model: 'User', select: '-password'}).then(response => {
                if(response.pay_slip) {
                    fileManager.returnFile(response.pay_slip).then(file => {
                        response.pay_slip = file;
                        resolve({status: 200, message: "successfully get gas bills", data: response});
                    })
                } else {
                    resolve({status: 200, message: "successfully get gas bills", data: response});
                }
            }).catch(err => {
                reject({status: 500, message: err});
            })
        })
    }

    this.findByQuery =(query) =>  {
        return new Promise((resolve,reject) => {
            gassBillModel.find(query).populate("unit_id").populate('tenant_id').populate("publishedBy", {path:'published_by', model: 'User', select: '-password'}).then(response  => {
                if(response.pay_slip) {
                    fileManager.returnFile(response.pay_slip).then(file => {
                        response.pay_slip = file;
                        resolve({status: 200, message: "successfully get gas bills", data: response});
                    })
                } else {
                    resolve({status: 200, message: "successfully get gas bills", data: response});
                }
            }).catch(err => {
                reject({status: 500, message: err});
            })
        })
    }

    this.findPaySlip = (path) => {
        return new Promise((resolve, reject) => {
            fileManager.returnFile(path).then(file => {
                resolve({status: 200, message: "successfully get gas bills", data: file}); 
            }).catch(err => {
                reject({status: 500, message: err});
            })
        })
    }
}

module.exports = new gasBillController();