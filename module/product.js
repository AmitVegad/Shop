const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Shop', { useNewUrlParser: true, useCreateIndex: true, });
var conn = mongoose.Collection;
var productSchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: true,
    },
    category_name: {
        type: String,
        required: true,
    },
  
    product_id: {
        type: String,
        required: true,
        index: {
            unique: true,
        }
    },
    product_name: {
        type: String,
        required: true,
    },
    product_detail: {
        type: String,
        required: true,
    },
});
var productModel = mongoose.model('product_details', productSchema);
module.exports = productModel;