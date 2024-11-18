const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { exec } = require("child_process");

exports.createPing = async (req, res) => {
  const { ip } = req.body;

  if (!ip) {
    return res.status(400).json({ message: "IP address is required" });
  }

  exec(`ping -n 10 ${ip}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr });
    } else {
      const result = parseMtrOutput(stdout, ip);
      res.json(result);
    }
  });
};

function parseMtrOutput(output, ip) {
  const result = output.split("\n").map((line) => {
    const timeMatch = line.match(/time=(\d+ms)/);
    const lossMatch = line.match(/Lost = (\d+)/);
    return {
      location: "Unknown", // Hoặc bạn có thể thêm logic để tìm địa điểm nếu cần
      ip: ip,
      ltc: timeMatch ? timeMatch[1] : "N/A",
      pkl: lossMatch ? `${parseInt(lossMatch[1]) * 10}%` : "0%",
      sent: "10",
    };
  });
  return result;
}

exports.getPing = async (req, res) => {
  try {
    const ping = await prisma.pingmtr.findMany();
    return res.status(200).json(ping);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
