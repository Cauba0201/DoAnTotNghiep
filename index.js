const express = require("express");
const app = express();
const port = 3000;
const database = require("./services/databasepg");

app.get("/", (req, res) => {
  res.send("Hello AnNguyen");
});

app.get("/test", async (req, res) => {
  try {
    const result = await database.client.query("SELECT * FROM testping");

    return res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/user", async (req, res) => {
  try {
    const result = await database.client.query("SELECT * FROM users");
    return res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
