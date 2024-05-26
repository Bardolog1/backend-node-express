'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    discount: Number,
    available: Boolean,
    count: Number,
    active: Boolean
});

module.exports = mongoose.model('Product', ProductSchema)