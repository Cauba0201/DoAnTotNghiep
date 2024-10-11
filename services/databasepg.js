const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "a",
  database: "postgres",
});

client.connect().then(() => console.log("connected"));

client.query(`Select * from testping `, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});

module.exports = { client };
