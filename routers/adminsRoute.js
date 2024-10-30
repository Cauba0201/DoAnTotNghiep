const router = require("express").Router();
const adminsControllerController = require("../controllers/adminsController");

router.post("/", adminsControllerController.createAdmins);
router.get("/", adminsControllerController.getAdmins);

module.exports = router;
