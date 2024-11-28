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

const measurements = [
  { country: "Vietnam", timestamp: "2024-11-28T08:15:00Z", packetLoss: 5 },
  { country: "Vietnam", timestamp: "2024-11-28T08:45:00Z", packetLoss: 8 },
  { country: "Vietnam", timestamp: "2024-11-28T09:15:00Z", packetLoss: 6 },
  { country: "Singapore", timestamp: "2024-11-28T08:00:00Z", packetLoss: 10 },
  { country: "Singapore", timestamp: "2024-11-28T08:30:00Z", packetLoss: 15 },
];

exports.getPacketLossCountry = async (req, res) => {
  try {
    const { provider } = req.query;

    const groupData = measurements.reduce((arr, curr) => {
      if (!acc[curr.country]) {
        acc[curr.country] = { total: 0, count: 0 };
      }
      acc[curr.country].total += curr.packetLoss;
      acc[curr.country].count += 1;
      return acc;
    }, {});
    const result = Object.entries(groupData).map(([country, data]) => ({
      country,
      avgPacketLoss: data.total / data.count,
    }));
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
