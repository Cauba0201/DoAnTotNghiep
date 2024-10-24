const database = require('../services/databasepg')

exports.getAllUser = async (req, res) => {
  try {
    const result = await database.client.query("SELECT * FROM admins");
    return res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
