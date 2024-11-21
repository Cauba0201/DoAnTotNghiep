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
    const latency = await prisma.chart_four.findMany();

    return res.status(200).json(latency);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

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

exports.getPacketLoss = async (req, res) => {
  try {
    const packetloss = await prisma.chart_four.findMany();

    return res.status(200).json(packetloss);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getPacketLossByIsp = async (req, res) => {
  
}