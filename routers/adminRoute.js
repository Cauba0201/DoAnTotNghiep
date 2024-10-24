const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { adminAuth} = require('../middlewares/authMiddleware')

//Admin login route
router.post("/admin/login", adminController.login);
router.get("/admin/login", adminController.login_get);
// router.post("/auth/signup", adminController.signup_post);
router.get("/auth/signup", adminController.signup_get);

// router.get("/admin/dashboard", adminAuth, adminController.getAdminDashboard);

module.exports = router;
