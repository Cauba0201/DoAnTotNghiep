const { Client } = require("pg");

const client = new Client({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASSWORD || "a",
  port: process.env.DB_PORT || 5432,
});

client.connect().then(() => console.log("connected"));

client.query(`Select * from admins `, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});

module.exports = { client };
