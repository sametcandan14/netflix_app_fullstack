const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection success"))
  .catch((err) => console.log(err));

const AuthRoute = require("./routes/auth");

app.use(express.json());

app.use("/api/auth", AuthRoute);

app.listen(8800, () => {
  console.log("backend server is running");
});
