const mongoose  = require('mongoose');

const ItemsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});

module.exports = mongoose.model('items', ItemsSchema);