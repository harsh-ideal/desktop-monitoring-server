const Activity = require("../models/activity.model");

exports.collect = async (req, res) => {
  await Activity.create(req.body);
  res.sendStatus(200);
};
