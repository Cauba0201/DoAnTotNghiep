const router = require("express").Router();
const testController = require("../controllers/testController");

router.get("/", testController.getTestPing);

module.exports = router;
