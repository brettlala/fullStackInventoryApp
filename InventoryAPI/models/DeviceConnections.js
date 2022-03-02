const mongoose  = require('mongoose');

const DeviceConnectionsSchema = new mongoose.Schema({
    host: String,
    userAgent: String
});

module.exports = mongoose.model('device_connections', DeviceConnectionsSchema);