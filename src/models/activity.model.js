import mongoose from "mongoose";

const schema = new mongoose.Schema({
  machineId: String,
  activeApp: String,
  windowTitle: String,
  mouseDistance: Number,
  keyboardEvents: Number,
  idleSeconds: Number
}, { timestamps: true });

const Activity= mongoose.model("Activity", schema);
export default Activity;