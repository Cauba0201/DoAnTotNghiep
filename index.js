const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: `${process.cwd()}./env` });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello An Nguyen");
});

// All routes will be here
// app.use("*", (req, res, next) => {
//   res.status(404).json({
//     status: "Fail",
//     message: "Route not found",
//   });
// });
app.use("/admins", require("./routers/adminsRoute"));
app.use("/test", require("./routers/testRoute"));
// app.use(require("./routers/testRoute"));
// app.use(require("./routers/userRoute"));
// app.use(require("./routers/adminRoute"));

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
