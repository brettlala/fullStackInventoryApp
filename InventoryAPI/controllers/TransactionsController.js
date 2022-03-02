const Transactions = require('../models/Transactions');
const Items = require('../models/Items');

// Read
async function index(req, res, next) {

  const all = await Transactions.find();

  res.status(200).json({
    message: 'This is all the transactions.',
    data: all
  });
}

// Create
async function create(req, res, next) {

  let total = 0;

  // loop over each item in request
  req.body.items.forEach(async el => {
    // add to total price
    total += el.unit_price * el.quantity;

    // Finding items in items table and reducing quantity
    let item = await Items.findById(el.item_id);
    await item.updateOne({
      quantity: item.quantity - el.quantity
    })
  })

  // create transaction
  const newTransaction = new Transactions ({
    total: total,
    employee_id: req.user.employee_id,
    items: req.body.items
  })

  await newTransaction.save();

  res.status(200).json({
    message: 'New transaction added'
  });
}

// Update
async function update(req, res, next) {

  let transaction = await Transactions.findById(req.query.id);

  await transaction.update(req.body);

  res.status(200).json({
    message: 'transaction updated',
  });
}

module.exports = {
  index,
  create,
  update
}