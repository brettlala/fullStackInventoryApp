const DeviceConnections = require('../models/DeviceConnections');

async function testFcn(req, res, next) {

  const NewDeviceConnection = new DeviceConnections({
      host: req.headers.host,
      userAgent: req.headers['user-agent']
  });

  NewDeviceConnection.save();

  res.status(200).json({
    message: 'Welcome to MERN Backend!',
  });
}

module.exports = {
  testFcn
}