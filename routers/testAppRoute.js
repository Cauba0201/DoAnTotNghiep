const router = require("express").Router();
const testAppController = require("../controllers/testAppController");

router.get("/", testAppController.getTestApp);

module.exports = router;
