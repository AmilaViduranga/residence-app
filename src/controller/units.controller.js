var mongoose = require("../DBConfig");
var unitModel = mongoose.model("Unit");

var UnitController = function() {
    this.createUnits = (unit) => {
        return new Promise((resolve,reject) => {
            var newUnit = new unitModel({
                name: unit.name,
                unit_identifier: unit.unit_identifier,
                floor: unit.floor,
                status: unit.status,
                PublishedBy: unit.PublishedBy,
                tenant_id: unit.tenant_id
            });

            newUnit.save().then(response =>  {
                resolve({status: 200, message: "successfully create unit", data: response});
            }).catch(err  => {
                console.log(err);
                reject({status: err.code, message: err.errorDetail});
            });
        })
    }

    this.updateUnit = (id, updatedUnit) => {
        return new Promise((resolve, reject) => {
            unitModel.findByIdAndUpdate(id, updatedUnit, (err,response) =>  {
                if (err) {
                    reject({status: err.code, message: err.errorDetail});
                }
                resolve({status: 200, message: "successfully updated unit details", data: response});
            })
        })
    }

    this.deleteUnit = (id) => {
        return new Promise((resolve,reject) => {
            unitModel.remove({_id: id}).then(response => {
                resolve({status: 200, message: "successfully delete unit", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findAllUnits = () => {
        return new Promise((resolve, reject) => {
            unitModel.find().populate('PublishedBy', {path:'published_by', model: 'User', select: '-password'}).populate('tenant_id').then(response => {
                resolve({status: 200, message: "successfully get all units", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findUnitByQury = (query) => {
        return new Promise((resolve, reject) => {
            unitModel.find(query).populate('PublishedBy', {path:'published_by', model: 'User', select: '-password'}).populate('tenant_id').then(response => {
                resolve({status: 200, message: "successfully get all units", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findUnitById = (id) => {
        return new Promise((resolve, reject) => {
            unitModel.find({_id: id}).populate('PublishedBy', {path:'published_by', model: 'User', select: '-password'}).populate('tenant_id').then(response => {
                resolve({status: 200, message: "successfully get unit", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }
}

module.exports = new UnitController();