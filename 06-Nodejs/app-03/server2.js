import { createServer } from "http";

const PORT = process.env.PORT;

const data = [
  { id: 1, name: "saqlain" },
  { id: 2, name: "Ali" },
  { id: 3, name: "hassan" },
  { id: 4, name: "hussain" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/user" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(data));
    res.end();
  } else if (req.url.match(/\/api\/user\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = data.find((u) => u.id === parseInt(id));

    if (user) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
    }
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ Message: "route not found" }));
    res.end();
  }

  return data;
});

server.listen(PORT, () => {
  console.log(`server is running : ${PORT}`);
});
