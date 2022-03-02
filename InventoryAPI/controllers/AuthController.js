const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Users = require('../models/Users');

// Login
async function login(req, res, next) {

    const user = await Users.findOne({employee_id: req.body.employee_id});
    const verify = bcrypt.compareSync(req.body.password, user.password);

    if(verify) {
        const token = jwt.sign({user: user}, process.env.TOKEN_SECRET);

        res.status(200).json({
            message: 'You are verified',
            token: token,
            user: {
              employee_id: user.employee_id,
              roles: user.roles
            }
        });
    } else {
        res.status(200).json({
        message: 'Unauthenicated'
        });
    }
}

// Create new User
async function newUser(req, res, next) {

    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

  const newUser = new Users({
      name: req.body.name,
      employee_id: req.body.employee_id,
      password: hash,
      roles: req.body.roles
  });

  await newUser.save();

  res.status(200).json({
    message: 'User added'
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
  login,
  newUser
}