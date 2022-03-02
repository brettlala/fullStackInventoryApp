const mongoose  = require('mongoose');

const TransactionsSchema = new mongoose.Schema({
    total: Number,
    employee_id: Number,
    items: [{
        item_id: mongoose.ObjectId,
        name: String,
        unit_price: Number,
        quantity: Number,
    }]
});

TransactionsSchema.methods.user = async function() {
    return await users.findOne({employee_id: this.employee_id});
}


module.exports = mongoose.model('transactions', TransactionsSchema);