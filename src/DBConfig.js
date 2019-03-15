var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// load models
var complaintManagementModel    = require("./model/complaint-management.model");
//var countersModel             = require("./model/counters.model");
var documentModel               = require("./model/document.model");
var facilitiesModel             = require("./model/facilities.model");
var gasBillModel                = require("./model/gasbill.model");
var maintanceBillModel          = require("./model/maintance-bill.model");
var noticeBoardModel            = require("./model/notice_board.model");
var panicAlertModel             = require("./model/panic_alert.model");
var roleModel                   = require("./model/role.model");
var tenantsModel                = require("./model/tenants.model");
var unitModel                   = require("./model/units.model");
var userModel                   = require("./model/user.model");

tenantsModel.pre('remove', next => {
    unitModel.remove({tenant_id: this._id}).exec();
    next();
})

mongoose.model("ComplaintManagement", complaintManagementModel);
//mongoose.model("Counters", countersModel);
mongoose.model("Document", documentModel, "Document");
mongoose.model("Facilities", facilitiesModel, "Facilities");
mongoose.model("GasBill", gasBillModel, "Gasbill");
mongoose.model("MaintanceBill", maintanceBillModel, "MaintenanceBill");
mongoose.model("NoticeBoard", noticeBoardModel, "NoticeBoard");
mongoose.model("PanicAllert", panicAlertModel, "PanicAlert");
mongoose.model("Role", roleModel, "roles");
mongoose.model("Tenants", tenantsModel, "Tenants");
mongoose.model("Unit", unitModel, "units");
mongoose.model("User", userModel, "users");

mongoose.connect('mongodb://connectup:connectup19@ds037395.mlab.com:37395/connectup', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;
