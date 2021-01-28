var express = require('express');
var router = express.Router();
var productModel = require('../module/product');


router.get('/', function (req, res, next) {

    res.render('addnewproduct', { title: 'Shopping Mart', success: '' });

});


router.post('/', function (req, res, next) {
  var catid = req.body.cat_id;
  var catname = req.body.cat_name;
  var productid = req.body.product_id;
  var productname = req.body.product_name;
  var peoductdetail = req.body.product_details;
    var product = new productModel({
      category_name: catname,
      category_id: catid,
      product_id: productid,
      product_name: productname,
      product_detail: peoductdetail
    });
    product.save(function (err, doc) {
      if (err) throw err;
    
        res.render('addnewproduct', { title: 'Shopping Mart', success: "Product Details Inserted Successfully" });

      });




});

module.exports = router;