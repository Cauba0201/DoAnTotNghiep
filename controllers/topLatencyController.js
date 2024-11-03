const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//GET method
exports.getTopLatency = async (req, res) => {
  try {
    const topLatency =
      await prisma.top_countries_with_lowest_latency.findMany();
    return res.status(200).json(topLatency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
