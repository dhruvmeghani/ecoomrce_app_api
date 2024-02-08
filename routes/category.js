var express = require('express');
var router = express.Router();

var category = require("../controller/category_controller");

router.post('/c_insert',category.insert)
router.get('/c_delete/:id',category.delete)
router.get('/c_update/:id',category.update)
router.get('/c',category.see_data)

module.exports = router;
