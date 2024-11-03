const router = require("express").Router();
const topLatencyController = require("../controllers/topLatencyController");

router.get("/", topLatencyController.getTopLatency);

module.exports = router;
