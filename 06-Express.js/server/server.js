const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Hello world ");
});

app.listen(8000, () => console.log("server is running"));
