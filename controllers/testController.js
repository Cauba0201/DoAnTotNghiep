const database = require("../services/databasepg");

exports.getAllTest = async (req, res) => {
  try {
    const result = await database.client.query("SELECT * FROM testping");

    return res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
