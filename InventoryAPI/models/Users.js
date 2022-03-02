const mongoose  = require('mongoose');
const Transactions  = require('./Transactions');

const UsersSchema = new mongoose.Schema({
    name: String,
    employee_id: { type: Number, unique: true, required: true },
    password: String,
    roles: [String]
});

UsersSchema.methods.transactions = async function() {
    return await Transactions.find({employee_id: this.employee_id});
}

module.exports = mongoose.model('users', UsersSchema);