// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const productController=require('../Controller/router.controller')

const router =require('express').Router()

router.post('./a', productController.addProduct)