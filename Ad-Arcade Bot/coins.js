const mongoose = require("mongoose");

const coinSchema = mongoose.Schema({
  userID: String,
  serverID: String,
  coins: Number
});
