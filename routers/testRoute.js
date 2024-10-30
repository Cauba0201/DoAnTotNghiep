const router = require("express").Router()
const testController = require('../controllers/testController')

router.get("/test", testController.createTestPing)

module.exports = router