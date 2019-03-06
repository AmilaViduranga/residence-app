var mongoose = require("../DBConfig");
var tenantModel = mongoose.model("Tenants");

var TenantsController = function() {
    this.createTenants = (tenant) => {
        return new Promise((resolve,reject) => {
            var newTenant = new tenantModel({
                name: tenant.name,
                domain:tenant.domain,
                address_line1: tenant.address_line1,
                country: tenant.country,
                city: tenant.city,
                address_line2: tenant.address_line2,
                postal_code: tenant.postal_code,
                longitude: tenant.longitude,
                latitude: tenant.latitude,
                status: tenant.status,
                PublishedBy: tenant.PublishedBy,
                admin_user_id: tenant.admin_user_id
            });

            newTenant.save().then(response =>  {
                resolve({status: 200, message: "successfully create tenant", data: response});
            }).catch(err  => {
                console.log(err);
                reject({status: err.code, message: err.errorDetail});
            });
        })
    }

    this.updatTenant = (id, updatedTenant) => {
        return new Promise((resolve, reject) => {
            tenantModel.findByIdAndUpdate(id, updatedTenant, (err,response) =>  {
                if (err) {
                    reject({status: err.code, message: err.errorDetail});
                }
                resolve({status: 200, message: "successfully updated tenant details", data: response});
            })
        })
    }

    this.deleteTenant = (id) => {
        return new Promise((resolve,reject) => {
            tenantModel.remove({_id: id}).then(response => {
                resolve({status: 200, message: "successfully delete tenant", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findAllTenant = () => {
        return new Promise((resolve, reject) => {
            tenantModel.find().populate('PublishedBy', {path:'published_by', model: 'User', select: '-password'}).populate('admin_user_id', {path:'published_by', model: 'User', select: '-password' }).then(response => {
                resolve({status: 200, message: "successfully get all tenant", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findTenantByQury =(query) => {
        return new Promise((resolve, reject) => {
            tenantModel.find(query).populate('PublishedBy', {path:'published_by', model: 'User', select: '-password'}).populate('admin_user_id', {path:'published_by', model: 'User', select: '-password'}).then(response => {
                resolve({status: 200, message: "successfully get all tenant", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }

    this.findTenantById = (id) => {
        return new Promise((resolve, reject) => {
            tenantModel.find({_id: id}).populate('PublishedBy', {path:'published_by', model: 'User', select: '-password'}).populate('admin_user_id', {path:'published_by', model: 'User', select: '-password'}).then(response => {
                resolve({status: 200, message: "successfully get all tenant", data: response});
            }).catch(err => {
                reject({status: err.code, message: err.errorDetail});
            })
        })
    }
}

module.exports = new TenantsController();