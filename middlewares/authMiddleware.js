const jwt = require("jsonwebtoken");

exports.adminAuth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.admin = decoded; // Add admin data to request object
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token." });
  }
};
