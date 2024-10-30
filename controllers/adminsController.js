const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createAdmins = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(422).json({ error: "Name is requered" });
    }

    const newAdmins = await prisma.admins.create({
      data: {
        name: req.body.name,
      },
    });

    return res.status(201).json(newAdmins);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAdmins = async (req, res) => {
  try {
    const admins = await prisma.admins.findMany();
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.updateAdmins = async (req, res) => {
  try {
    if (
      !(await prisma.admins.findUnique({
        where: { id: parseInt(req.params.id) },
      }))
    ) {
      return res.status(404).json({ error: "Admin not found" });
    }
    if (!req.body.name) {
      return res.status(422).json({ error: "Name is requered" });
    }
    if (await prisma.admins.findUnique({ where: { name: req.body.name } })) {
      return res
        .status(409)
        .json({ error: `${req.body.name} admin already exitsts` });
    }

    const updateAdmins = await prisma.admins.update({
      data: {
        name: req.body.name,
      },
      where: {
        id: parseInt(req.params.id),
      },
    });
    return res.status(200).json({ updateAdmins });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
