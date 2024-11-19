const router = require("express").Router();
const testController = require("../controllers/testController");

router.get("/", testController.getTestPing);
router.get("/latency", testController.getLatencyTestPing);
router.get("/latency/:isp?", testController.getLatencyByIsp);

module.exports = router;
