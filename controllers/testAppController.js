const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//GET method
exports.getTestApp = async (req, res) => {
  try {
    const testApp = await prisma.pingapp.findMany();
    return res.status(200).json(testApp);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
