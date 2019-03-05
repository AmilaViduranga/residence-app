var express         = require('express');
var router          = express.Router();

var userController  = require("../controller/user.controller");
var roleController = require("../controller/role.controller");


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

router.put('/user/update/:id', (req,res) => {
    userController.updateUser(req.body, req.params.id).then(data=> {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/user/get/all', (req,res) => {
    userController.getAllUsers().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/user/get/:id', (req,res) => {
    userController.getSingleUser(req.params.id).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.delete('/user/delete/:id', (req, res) => {
    userController.deleteUser(req.params.id).then(data  => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});


router.post('/user/signin', (req, res)  =>  {
    userController.login(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
})
/*
 * .................. role routes ..................................
 */
router.post('/role/create', (req, res) => {
    roleController.createRole(req.body).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.put('/role/update/:id', (req,res) => {
    roleController.updateRole(req.body, req.params.id).then(data=> {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/role/get/all', (req,res) => {
    roleController.getAllRoles().then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.get('/role/get/:id', (req,res) => {
    roleController.getSingleRole(req.params.id).then(data => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});

router.delete('/role/delete/:id', (req, res) => {
    roleController.deleteRole(req.params.id).then(data  => {
        res.status(data.status).send(data);
    }).catch(err => {
        res.status(err.status).send(err);
    })
});


module.exports = router;