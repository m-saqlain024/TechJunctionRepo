const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("hi");
  req.send("hello xindigi");
});

app.listen(3000);
  