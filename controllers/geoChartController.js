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

exports.getPacketLossCountry = async (req, res) => {
  try {
    const { isp } = req.query;

    if(!isp) {
      const allLatencies = await prisma.$queryRaw`
      SELECT
        country,
        avg_latency,
        packet_loss,
        local_isp,
        updated_date
      FROM
        data_test
      `
    return res.status(200).json(allLatencies);
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
