const router = require("express").Router();
const topLatencyController = require("../controllers/topLatencyController");

router.get("/", topLatencyController.getTopLatency);
router.get("/fpt", topLatencyController.getTopLatencyFpt);
router.get("/viettel", topLatencyController.getTopLatencyViettel);
router.get("/vnpt", topLatencyController.getTopLatencyVnpt);

module.exports = router;
