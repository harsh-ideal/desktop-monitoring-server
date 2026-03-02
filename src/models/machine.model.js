import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: { type: String, unique: true },
  machineId: String,
  machineName: String,
  registeredAt: { type: Date, default: Date.now }
});

const Machine = mongoose.model("Machine", schema);

export default Machine;