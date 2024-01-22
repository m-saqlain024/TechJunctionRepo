import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const express = require("express");

const t = initTRPC.create();
const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "this is a HiFunction and procedure is for just input and output ";
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;
      throw new Error("Invalid Input: Expect String ");
    })
    .mutation((req) => {
      console.log(`clients say : ${req.input}`);
      return true;
    }),
});

const app = express();

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

// app.get("/", (req, res) => {
//   res.send("Hello World being mursdhi!");
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
