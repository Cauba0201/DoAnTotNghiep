const router = require("express").Router();
const testController = require("../controllers/testController");

router.get("/", testController.getTestPing);
router.get("/latency", testController.getLatencyTestPing);
router.get("/latency/:isp?", testController.getLatencyByIsp);
router.get("/latencyhour/:isp?",testController.getLatencyHourByIsp)
router.get("/packetloss", testController.getPacketLoss);
router.get("/packetloss/:isp?", testController.getPacketLossByIsp);

module.exports = router;
