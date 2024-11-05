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

exports.getTopLatencyFpt = async (req, res) => {
  try {
    const topLatencyFpt =
      await prisma.top_countries_with_lowest_latency.findMany({
        where: {
          local_isp: {
            contains: "FPT",
          },
        },
        select: {
          avg_latency: true,
          local_isp: true,
        },
      });

    res.json(topLatencyFpt);
  } catch (error) {
    return res.status(500).send("Server error");
  }
};

exports.getTopLatencyViettel = async (req, res) => {
  try {
    const topLatencyViettel =
      await prisma.top_countries_with_lowest_latency.findMany({
        where: {
          local_isp: {
            contains: "VIETTEL",
          },
        },
        select: {
          avg_latency: true,
          local_isp: true,
        },
      });

    res.json(topLatencyViettel);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
};

exports.getTopLatencyVnpt = async (req, res) => {
  try {
    const topLantencyVNPT =
      await prisma.top_countries_with_lowest_latency.findMany({
        where: {
          local_isp: {
            contains: "VNPT",
          },
        },
        select: {
          avg_latency: true,
          local_isp: true,
        },
      });

    res.json(topLantencyVNPT);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
};
