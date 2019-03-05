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

mongoose.model("ComplaintManagement", complaintManagementModel);
//mongoose.model("Counters", countersModel);
mongoose.model("Document", documentModel);
mongoose.model("Facilities", facilitiesModel);
mongoose.model("GasBill", gasBillModel);
mongoose.model("MaintanceBill", maintanceBillModel);
mongoose.model("NoticeBoard", noticeBoardModel);
mongoose.model("PanicAllert", panicAlertModel);
mongoose.model("Role", roleModel);
mongoose.model("Tenants", tenantsModel);
mongoose.model("Unit", unitModel);
mongoose.model("User", userModel);

mongoose.connect('mongodb://localhost:27017/connectup', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;
