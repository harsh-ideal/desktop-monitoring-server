import Activity  from "../models/activity.model.js";

export const collect = async (req, res) => {
  await Activity.create(req.body);
  res.sendStatus(200);
};
