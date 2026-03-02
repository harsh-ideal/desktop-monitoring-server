import  Machine from "../models/machine.model.js";
import os  from "os";

export const register = async (req, res) => {
  const { employeeId, machineId } = req.body;

  const existing = await Machine.findOne({ employeeId });

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