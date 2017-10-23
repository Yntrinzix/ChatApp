const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema({
  name: String,
  password: String
});

module.exports = mongoose.model('User', UserModelSchema);
