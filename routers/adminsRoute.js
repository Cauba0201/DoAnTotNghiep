// const router = require("express").Router();
// const adminsControllerController = require("../controllers/adminsController");

// router.post("/", adminsControllerController.createAdmins);
// router.get("/", adminsControllerController.getAdmins);
// router.put("/:id", adminsControllerController.updateAdmins);
// router.delete("/:id", adminsControllerController.deleteAdmin);
// module.exports = router;

const express = require("express");
const router = express.Router();

// Route chính của admin (dashboard)
router.get("/", (req, res) => {
  const data = {
    title: "Admin Dashboard",
    user: "Nguyen An", // Giả lập dữ liệu user
    stats: {
      totalUsers: 20,
      activeUsers: 80,
      totalRevenue: 20,
    },
  };

  res.render("admin/dashboard", data); // Render giao diện
});

module.exports = router;
