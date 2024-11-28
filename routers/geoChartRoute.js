const router = require("express").Router();
const geoChartController = require("../controllers/geoChartController");

router.get("/", geoChartController.getLatencyCountry);
router.get("/packetlossfollowcountry/:provider?", geoChartController.getPacketLossCountry);

module.exports = router;
