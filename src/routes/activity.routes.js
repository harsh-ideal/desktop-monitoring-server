const router = require("express").Router();
const { collect } = require("../controllers/activity.controller");

router.post("/", collect);

module.exports = router;
