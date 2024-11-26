const router = require("express").Router();
const geoChartController = require("../controllers/geoChartController");

router.get("/", geoChartController.getLatencyCountry);

module.exports = router;
