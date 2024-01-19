import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.listen(3000);

console.log("hello  waorld");
