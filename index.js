const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config({ path: `${process.cwd()}./env` });

// Cấu hình View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public folder cho CSS, JS
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello An Nguyen");
// });

// All routes will be here
app.use("/", require("./routers/adminsRoute"));
app.use("/test", require("./routers/testRoute"));
app.use("/testapp", require("./routers/testAppRoute"));
app.use("/toplatency", require("./routers/topLatency"));
app.use("/ping", require("./routers/pingRoute"));
app.use("/geo", require("./routers/geoChartRoute"));

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
