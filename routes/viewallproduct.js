var express = require('express');
var router = express.Router();
var productModel = require('../module/product');


var getAllproduct = productModel.find({});

router.get('/', function (req, res, next) {
    getAllproduct.exec(function (err, data) {
      if (err) throw err;
      res.render('viewallproduct', { title: 'Shopping Mart', records: data });
    });
  });


module.exports = router;