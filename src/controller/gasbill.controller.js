var mongoose =require("../DBConfig");
var gassBillModel = mongoose.model("GasBill");

var gasBillController = function() {
    this.insertGassBill = (gassBill) => {
        return new Promise((resolve,reject) => {
            var newGassBill = new gassBillModel({
                bill_date: gassBill.bill_date,
                account_id: gassBill.account_id,
                due_date: gassBill.due_date,
                amount: gassBill.amount,
                usage: gassBill.usage,
                outstanding:gassBill.outstanding,
                message: gassBill.message,
                status:gassBill.status,
                unit_id: gassBill.unit_id,
                publishedBy: gassBill.publishedBy
            });
            newGassBill.save().then(response => {
                resolve({status: 200, message: "successfully create gas bill", data: response});
            }).catch(err  => {
                console.log(err);
                reject({status: err.code, message: err.errorDetail});
            });
        })
    }

    this.updateGassBill = (id,updatedGasBill) => {
        return new Promise((resolve,reject) => {
            gassBillModel.findByIdAndUpdate(id,updatedGasBill,(err, response) => {
                if (err) {
                    reject({status: err.code, message: err.errorDetail});
                }
                resolve({status: 200, message: "successfully updated gas bill", data: response});
            })
        })
    }

    this.deleteGassBill = (id) => {
        return new Promise((resolve,reject) => {
            gassBillModel.remove({_id: id}).then(response =>  {
                resolve({status: 200, message: "successfully delete gas bill", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findAllGassBill = () => {
        return new Promise((resolve,reject) => {
            gassBillModel.find().populate("unit_id").populate("publishedBy", {path:'published_by', model: 'User', select: '-password'}).then(response => {
                resolve({status: 200, message: "successfully get all gas bills", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findById = (id) => {
        return new Promise((resolve,reject) => {
            gassBillModel.find({_id: id}).populate("unit_id").populate("publishedBy", {path:'published_by', model: 'User', select: '-password'}).then(response => {
                resolve({status: 200, message: "successfully get gas bills", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findByQuery =(query) =>  {
        return new Promise((resolve,reject) => {
            gassBillModel.find(query).populate("unit_id").populate("publishedBy", {path:'published_by', model: 'User', select: '-password'}).then(response  => {
                resolve({status: 200, message: "successfully get gas bills", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }
}

module.exports = new gasBillController();