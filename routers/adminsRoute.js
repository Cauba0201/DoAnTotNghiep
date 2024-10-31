const router = require("express").Router();
const adminsControllerController = require("../controllers/adminsController");

router.post("/", adminsControllerController.createAdmins);
router.get("/", adminsControllerController.getAdmins);
router.put("/:id", adminsControllerController.updateAdmins);
router.delete("/:id", adminsControllerController.deleteAdmin);
module.exports = router;
