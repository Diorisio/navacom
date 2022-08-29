var express = require('express');
var router = express.Router();
const {llenar,mostrar} =require('../controller/KindController')


router.get('/',llenar);
router.get('/mostrar',mostrar);

module.exports = router;
