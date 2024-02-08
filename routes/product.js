var express = require('express');
var router = express.Router();

var product = require("../controller/product_controller");

router.post('/p_insert',product.insert)
router.post('/p_delete/:id',product.delete)
router.post('/p_update/:id',product.update)
router.post('/p',product.see_data)


module.exports = router;
