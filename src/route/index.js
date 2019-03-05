var express         = require('express');
var router          = express.Router();

var userController  = require("../controller/user.controller");
var roleController = require("../controller/role.controller");


//------------------ user routes ---------------------------------
router.post('/user/create', (req, res) => {
    userController.create(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});


//.................. role routes ..................................
router.post('/role/create', (req, res) => {
    roleController.createRole(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})


module.exports = router;