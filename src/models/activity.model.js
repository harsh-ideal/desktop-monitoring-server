const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  machineId: String,
  activeApp: String,
  windowTitle: String,
  mouseDistance: Number,
  keyboardEvents: Number,
  idleSeconds: Number
}, { timestamps: true });

module.exports = mongoose.model("Activity", schema);
