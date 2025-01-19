const express = require("express");
const router = express.Router();

// Route chính của admin (dashboard)
router.get("/routers/user", (req, res) => {
  const data = {
    title: "user Dashboard",
    user: "Nguyen An", // Giả lập dữ liệu user
    stats: {
      totalUsers: 20,
      activeUsers: 80,
      totalRevenue: 20,
    },
  };

  res.render("routers/user", data); // Render giao diện
});

module.exports = router;
