const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getLatencyCountry = async (req, res) => {
  try {
    const geoChart = await prisma.dataTest.findMany();

    return res.status(200).json(geoChart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
