import  Machine from "../models/machine.model.js";
import os  from "os";

export const register = async (req, res) => {
  const { userId, machineId } = req.body;

  const existing = await Machine.findOne({ userId });

  if (existing) {
    return res.json({ message: "Already registered" });
  }

  const employee = await Machine.create({
    userId,
    machineId,
    machineName: os.hostname()
  });

  res.json({
    message: "Registered successfully",
    employee
  });
};