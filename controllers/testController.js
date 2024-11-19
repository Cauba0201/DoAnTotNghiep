const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createTestPing = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(422).json({ error: "Name is requered" });
    }

    const newTestPing = await prisma.testPing.create({
      data: {
        name: req.body.name,
      },
    });

    return res.status(201).json(newTestPing);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getTestPing = async (req, res) => {
  try {
    const test = await prisma.testPing.findMany();
    return res.status(200).json(test);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getLatencyTestPing = async (req, res) => {
  try {
    const latency = await prisma.chart_four.findMany();
    
    return res.status(200).json(latency);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// exports.transferTestPingToChartFour = async (req, res) => {
//   try {
//     const testPingData = await prisma.testPing.findMany({
//       select: {
//         id: true,
//         avg_latency: true,
//         local_isp: true,
//         // created_date: true,
//       },
//     });

//     if (testPingData.length === 0) {
//       return res.status(400).json({ message: "No data found in testPing" });
//     }

//     const chartFourData = testPingData.map((item) => ({
//       id: item.id,
//       avg_latency: item.avg_latency,
//       local_isp: item.local_isp,
//       // created_date: item.created_date,
//     }));

//     await prisma.chart_four.createMany({
//       data: chartFourData,
//       skipDuplicates: true,
//     });

//     return res.status(200).json({ message: "Data transferred successfully!" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
