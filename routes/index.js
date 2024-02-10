var express = require('express');
var router = express.Router();

var admin = require("../controller/admin_controller");

router.post('/insert',admin.insert)
router.get('/delete/:id',admin.delete)
router.get('/update/:id',admin.update)
router.get('/',admin.see_data)
router.post('/login',admin.login)

module.exports = router;

