const express = require("express");
const bcrypt = require("bcrypt");
const cors = require('cors');
const app = express();
const port = 3000;


const corsOptions = {
  origin: "http://localhost:5173", // Update this to match your frontend's URL
  methods: ["GET", "POST"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello An Nguye");
});

// app.use(require("./routers/testRoute"));
// app.use(require("./routers/userRoute"));
// app.use(require("./routers/adminRoute"));

app.get("/auth/login", (res, req) => {
  req.send("login")
})
app.get("/auth/signup", (res, req) => {
  req.send("signup")
})

app.post("/auth/signup", (res, req) => {
  let { name, email, password, password2 } = req.body;

  // let error = [];

  // if (!name || !email || !password || !password2) {
  //   error.push({ message: "Please enter all fields" });
  // }

  // if (password.length < 6) {
  //   error.push({ message: "Password should be least 6 characters" });
  // }

  // if (password != password2) {
  //   error.push({ message: "Password do not match" });
  // }

  // if(error.length > 0 ){
  //   res.render("register", {error})
  // }

  console.log({
    name,
    email,
    password,
    password2,
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
