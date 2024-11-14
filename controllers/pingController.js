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
      const result = parseMtrOutput(stdout,ip);
      res.json(result);
    }
  });
};

function parseMtrOutput(output,ip) {
  // Giả sử bạn sẽ xử lý chuỗi `output` từ `mtr` để tách thông tin LTC, PKL và SENT
  // Trả về dưới dạng một object JSON với format giống trong ảnh

  // Đây chỉ là ví dụ xử lý, bạn cần điều chỉnh cho phù hợp với đầu ra thực tế
  //   return output.split("\n").map((line) => {
  //     // Tách các thông tin cần thiết từ dòng đầu ra của `mtr`
  //     const columns = line.trim().split(/\s+/);
  //     return {
  //       location: columns[0],
  //       ip: columns[1],
  //       ltc: columns[2],
  //       pkl: columns[3],
  //       sent: columns[4],
  //     };

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
