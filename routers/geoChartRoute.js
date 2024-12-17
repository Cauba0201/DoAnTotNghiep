const router = require("express").Router();
const geoChartController = require("../controllers/geoChartController");

router.get("/", geoChartController.getLatencyCountry);
router.get("/latency", geoChartController.getPacketLossCountry)

module.exports = router;
