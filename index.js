const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello AnNguyen");
});

app.use(require("./routers/testRoute"));
app.use(require("./routers/userRoute"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
