const { query } = require('express');
const Items = require('../models/Items');

// Read
async function index(req, res, next) {

  const allItems = await Items.find();

  res.status(200).json({
    message: 'This is all the items.',
    data: allItems
  });
}

// Create
async function create(req, res, next) {

  // created item
  const newItem = new Items ({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity
  })

  await newItem.save();

  res.status(200).json({
    message: 'New item added'
  });
}

// Update
async function update(req, res, next) {

  let item = await Items.findById(req.query.id);

  await item.update(req.body);

  res.status(200).json({
    message: 'Item updated',
  });
}

// Delete
async function deleteItem(req, res, next) {
  
  let item = await Items.findByIdAndDelete(req.query.id);

  res.status(200).json({
    message: 'Item deleted'
  });
}

module.exports = {
  index,
  create,
  update,
  deleteItem
}