var express             = require('express');
var router              = express.Router();
var jwt                 = require('express-jwt');

var STATICS             = require("../globals");
var userController      = require("../controller/user.controller");
var roleController      = require("../controller/role.controller");
var gasbillController   = require("../controller/gasbill.controller");
var tenantController    = require("../controller/tenants.controller");
var unitController      = require("../controller/units.controller");


/*
 *------------------ user routes ---------------------------------
 */
router.post('/user/create', (req, res) => {
    userController.createUser(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.put('/user/update/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    userController.updateUser(req.body, req.params.id).then(data=> {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/user/get/all', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    userController.getAllUsers().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/user/get/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    userController.getSingleUser(req.params.id).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.delete('/user/delete/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    userController.deleteUser(req.params.id).then(data  => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});


router.post('/user/login', (req, res)  =>  {
    userController.login(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})


/*
 * .................. role routes ..................................
 */
router.post('/role/create', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    roleController.createRole(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.put('/role/update/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    roleController.updateRole(req.body, req.params.id).then(data=> {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/role/get/all', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    roleController.getAllRoles().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/role/get/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    roleController.getSingleRole(req.params.id).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.delete('/role/delete/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    roleController.deleteRole(req.params.id).then(data  => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/role/roles-only', (req, res) => {
    roleController.getRoleList().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})


/*
 * .................. gasbill routes ..................................
 */
router.post('/gasbill/create', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    gasbillController.insertGassBill(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.put('/gasbill/update/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    gasbillController.updateGassBill(req.params.id, req.body).then(data=> {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/gasbill/get/all', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    gasbillController.findAllGassBill().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/gasbill/get/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    gasbillController.findById(req.params.id).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.post('/gasbill/get/by-query',  jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    gasbillController.findByQuery(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.delete('/gasbill/delete/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    gasbillController.deleteGassBill(req.params.id).then(data  => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.post('/gasbill/get/pay_slip',jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    gasbillController.findPaySlip(req.body.path).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
} )


/*
 * .................. tenant routes ..................................
 */
router.post('/tenant/create', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    tenantController.createTenants(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.put('/tenant/update/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    tenantController.updatTenant(req.params.id, req.body).then(data=> {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/tenant/get/all', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    tenantController.findAllTenant().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.post('/tenant/get/by-query',  jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    tenantController.findTenantByQury(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.delete('/tenant/delete/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    tenantController.deleteTenant(req.params.id).then(data  => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/tenant/get/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    tenantController.findTenantById(req.params.id).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});


/*
 * .................. unit routes ..................................
 */
router.post('/unit/create', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    unitController.createUnits(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.put('/unit/update/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    unitController.updateUnit(req.params.id, req.body).then(data=> {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/unit/get/all', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    unitController.findAllUnits().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.post('/unit/get/by-query',  jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    unitController.findUnitByQury(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.delete('/unit/delete/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req, res) => {
    unitController.deleteUnit(req.params.id).then(data  => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/unit/get/:id', jwt({secret: STATICS.JWT_KEY}).unless({path:['/user/login']}), (req,res) => {
    unitController.findUnitById(req.params.id).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

module.exports = router;