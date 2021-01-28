var express = require('express');
var router = express.Router();
var productModel = require('../module/product');

router.get('/', function (req, res, next) {
    
    res.redirect('/index');
});

router.get('/edit/:id', function (req, res, next) {
    var id = req.params.id;
    var getProductsDetails = productModel.findById({ _id: id });
    getProductsDetails.exec(function (err, data) {
        if (err) throw err;
            res.render('editproduct', { title: 'Shopping Mart', record: data, success: '' });
    });
});

router.post('/edit/:id', function (req, res, next) {
    
    var id = req.params.id;
    var categoryid=req.body.cat_id;
    var categoryname=req.body.cat_name;
    var productid = req.body.productid;
    var productname = req.body.productname;
    var productdetails = req.body.product_details;
    productModel.findByIdAndUpdate(id, {category_id:categoryid,category_name:categoryname, product_id: productid, product_name: productname, product_detail: productdetails }).exec(function (err) {
        if (err) throw err;
        var getProductDetails = productModel.findById({ _id: id });
        getProductDetails.exec(function (err, data) {
            if (err) throw err;
           
                res.render('editproduct', { title: 'Shopping Mart', record: data, success: 'Product Updated Successfully' });
           
        });
    });
});

router.get('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    var productdelete = productModel.findByIdAndDelete(id);
    productdelete.exec(function (err) {
        if (err) throw err;
        res.redirect('/viewallproduct/');
    });
});


module.exports = router;