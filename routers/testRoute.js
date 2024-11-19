const router = require("express").Router();
const testController = require("../controllers/testController");

router.get("/", testController.getTestPing);
router.get("/latency",testController.getLatencyTestPing)
// router.post("/transfer", testController.transferTestPingToChartFour)

module.exports = router;
