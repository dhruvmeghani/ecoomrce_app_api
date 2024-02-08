var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({

image       :   { type:String},
mrp         :   { type:String},
price       :   { type:String},
discount    :   { type:String},
brand       :   { type:String},  
title       :   { type:String},
discription :   { type:String},
rating      :   { type:String},
boughtpast  :   { type:String},
stock       :   { type:String},
category    :   { type:String}




})

module.exports = mongoose.model("product", productSchema);   