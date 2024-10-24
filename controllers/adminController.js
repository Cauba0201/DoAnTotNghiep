const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("../services/databasepg");
const { body, validationResult } = require("express-validator");

// exports.login = [
//   // Validation middleware
//   body("email").notEmpty().withMessage("Email is required"),
//   body("password").notEmpty().withMessage("Password is required"),

//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       // Fetch admin from database
//       const result = await database.client.query(
//         "SELECT * FROM admins WHERE email = $1",
//         [email]
//       );
//       const admin = result.rows[0];

//       if (!admin) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }

//       // Compare the password
//       const match = await bcrypt.compare(password, admin.password);
//       if (!match) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }

//       // Generate a token (You can customize the payload based on your requirements)
//       const token = jwt.sign(
//         { id: admin.id, email: admin.email, role: "admin" },
//         process.env.JWT_SECRET || "your_jwt_secret", // use a secure environment variable for this
//         { expiresIn: "1h" }
//       );

//       return res.status(200).json({ token });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   },
// ];

// exports.login_get = (res, req) => {
//   res.render("login");
// };
exports.signup_get = (res, req) => {
  res.send("sign up get");
};
// exports.signup_post = (res, req) => {
//   let {name, email, password, password2} = req.body

//   console.log({
//     name,
//     email,
//     password,
//     password2,
//   });
//   // res.send("sign up post ");
// };
