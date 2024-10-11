const router = require("express").Router();
const userController = require('../controllers/userController')

router.get("/user", userController.getAllUser);

module.exports = router;
