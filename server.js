const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

console.log("PORT", process.env.PORT);

app.get("/", (req, res) => {
  res.send("Beanstalk Server is responding");
});

app.listen(PORT, () => {
  console.log(`Beanstalk Server is running on ${PORT}`);
});