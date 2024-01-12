import express from "express";
import cors from "cors";

const app = express();

// Allow requests from your frontend URL
const corsOptions = {
  origin: "*", // Allow all origins (not recommended for production)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/getData", (req, res) => {
  res.send("this my first backend program");
});

app.listen(3000, () => console.log("app is running "));
