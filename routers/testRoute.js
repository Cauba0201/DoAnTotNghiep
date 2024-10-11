const router = require("express").Router()
const testController = require('../controllers/testController')

router.get("/test", testController.getAllTest)

module.exports = router