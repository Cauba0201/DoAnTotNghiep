const router = require("express").Router();
const pingController = require("../controllers/pingController");

router.post("/", pingController.createPing);
router.get("/pingmtr", pingController.getPing);

module.exports = router;
