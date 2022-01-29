const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const app = express();

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/products", function (req, res) {
  res.json({ success: true });
});

const PORT = process.env.PORT | "3001";

app.listen(PORT, function () {
  console.log("express is running");
});
