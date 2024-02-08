var express = require('express');
var router = express.Router();

var user = require("../controller/user_controller");

router.post('/u_insert',user.insert)
router.post('/u_delete/:id',user.delete)
router.post('/u_update/:id',user.update)
router.post('/u',user.see_data)


module.exports = router;
