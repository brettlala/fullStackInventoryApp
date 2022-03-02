const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

async function auth(req, res, next) {

  const token = req.headers.authorization.split(' ')[1];
  console.log(token);

  try{
      const payload = await jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = payload.user;
      next();
  } catch(e) {
      console.log(e);
      res.status(401).json({
          message: 'unauthenticated'
      })
  }
}

module.exports = auth;