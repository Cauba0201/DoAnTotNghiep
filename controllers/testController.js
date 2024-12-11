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
    const test = await prisma.dataTest.findMany();
    return res.status(200).json(test);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getLatencyTestPing = async (req, res) => {
  try {
    const latency = await prisma.chart_four.findMany(); //chart four

    return res.status(200).json(latency);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// exports.getLatencyTestPing = async (req, res) => {
//   try {
//     const { timeframe } = req.query;
//     if (!["day", "week"].includes(timeframe)) {
//       return res.status(400).json({ message: error.message });
//     }

//     // Xac dinh thoi gian lay mau
//     const hours = timeframe === "day" ? 24 : 168;
//     const endDate = new Date();
//     const startDate = new Date(endDate.getTime() - hours * 60 * 60 * 1000);

//     const latency = await prisma.$queryRaw`
//       SELECT
//         DATE_TRUNC('hour', "createdAt") AS hour,
//         AVG("avg_latency") AS avg_latency,
//         "local_isp"
//       FROM "chart_four"
//       WHERE "createdAt" BETWEEN ${startDate} AND ${endDate}
//       GROUP BY hour, "local_isp"
//       ORDER BY hour ASC;
//     `;

//     return res.status(200).json(latency);
//   } catch (error) {
//     return res.status(400).json({ error: error.message });
//   }
// };

exports.getLatencyByIsp = async (req, res) => {
  try {
    // Lấy slug từ URL (vd: fpt, vnpt, viettel)
    const { isp } = req.params;

    // Nếu không có slug (truy cập `/latency`), trả về tất cả 3 nhà mạng
    if (!isp) {
      const allLatencies = await prisma.chart_four.findMany({
        where: {
          OR: [
            {
              local_isp: {
                contains: "FPT",
                mode: "insensitive",
              },
            },
            {
              local_isp: {
                contains: "Viettel",
                mode: "insensitive",
              },
            },
            {
              local_isp: {
                contains: "VNPT",
                mode: "insensitive",
              },
            },
          ],
        },
        select: {
          avg_latency: true,
          local_isp: true,
        },
      });
      return res.status(200).json(allLatencies);
    }

    // Nếu có slug, lọc theo nhà mạng cụ thể
    const filteredLatencies = await prisma.chart_four.findMany({
      where: {
        local_isp: {
          contains: isp,
          mode: "insensitive",
        },
      },
      select: {
        avg_latency: true,
        local_isp: true,
      },
    });

    // Nếu không tìm thấy dữ liệu cho nhà mạng, trả về 404
    if (filteredLatencies.length === 0) {
      return res.status(404).json({ message: `No data found for ${isp}` });
    }

    // Trả về dữ liệu của nhà mạng cụ thể
    return res.status(200).json(filteredLatencies);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getLatencyHourByIsp = async (req, res) => {
  try {
    const { isp } = req.params;

    // Nếu không có slug (lấy tất cả nhà mạng)
    if (!isp) {
      const allLatencies = await prisma.$queryRaw`
        SELECT 
          local_isp,
          -- DATE_TRUNC('hour', "createdAt") AS hour,
          EXTRACT('hour' FROM "createdAt") AS hour_of_day,
          ROUND(AVG(avg_latency), 2) AS avg_latency
        FROM chart_four
        WHERE 
          local_isp ILIKE '%FPT%' OR 
          local_isp ILIKE '%Viettel%' OR 
          local_isp ILIKE '%VNPT%'
        GROUP BY local_isp, hour_of_day
        ORDER BY hour_of_day ASC
        LIMIT 168;
      `;
      return res.status(200).json(allLatencies);
    }

    // Nếu có slug, lọc theo nhà mạng cụ thể
    const filteredLatencies = await prisma.$queryRaw`
      SELECT 
        local_isp,
        DATE_TRUNC('hour', "createdAt") AS hour,
        ROUND(AVG(avg_latency), 2) AS avg_latency
      FROM chart_four
      WHERE 
        local_isp ILIKE ${`%${isp}%`}
      GROUP BY local_isp, DATE_TRUNC('hour', "createdAt")
      ORDER BY hour ASC;
    `;

    // Kiểm tra nếu không có dữ liệu
    if (filteredLatencies.length === 0) {
      return res.status(404).json({ message: `No data found for ${isp}` });
    }

    // Trả về dữ liệu
    return res.status(200).json(filteredLatencies);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getPacketLoss = async (req, res) => {
  try {
    const packetloss = await prisma.avgPacketLossDay.findMany();

    return res.status(200).json(packetloss);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getPacketLossByIsp = async (req, res) => {
  try {
    // Lấy slug từ URL (vd: fpt, vnpt, viettel)
    const { isp } = req.params;

    // Nếu không có slug (truy cập `/latency`), trả về tất cả 3 nhà mạng
    if (!isp) {
      const allLatencies = await prisma.packet_loss.findMany({
        where: {
          OR: [
            {
              local_isp: {
                contains: "FPT",
                mode: "insensitive",
              },
            },
            {
              local_isp: {
                contains: "Viettel",
                mode: "insensitive",
              },
            },
            {
              local_isp: {
                contains: "VNPT",
                mode: "insensitive",
              },
            },
          ],
        },
        select: {
          avg_latency: true,
          local_isp: true,
        },
      });
      return res.status(200).json(allLatencies);
    }

    // Nếu có slug, lọc theo nhà mạng cụ thể
    const filteredLatencies = await prisma.chart_four.findMany({
      where: {
        local_isp: {
          contains: isp,
          mode: "insensitive",
        },
      },
      select: {
        avg_latency: true,
        local_isp: true,
      },
    });

    // Nếu không tìm thấy dữ liệu cho nhà mạng, trả về 404
    if (filteredLatencies.length === 0) {
      return res.status(404).json({ message: `No data found for ${isp}` });
    }

    // Trả về dữ liệu của nhà mạng cụ thể
    return res.status(200).json(filteredLatencies);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
