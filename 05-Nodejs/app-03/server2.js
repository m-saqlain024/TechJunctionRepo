import { createServer } from "http";

const PORT = process.env.PORT;

const data = [
  { id: 1, name: "saqlain" },
  { id: 2, name: "Ali" },
  { id: 3, name: "hassan" },
  { id: 4, name: "hussain" },
];

// middlware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// json Middlewre
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// route handler for GET api/user
const getUserHandler = (req, res) => {
  res.write(JSON.stringify(data));
  res.end();
};

// Route handler for Get api/user/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = data.find((u) => u.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

// Route handle for Not Found
const notFoundHandler = (req, res) => {
  res.write(JSON.stringify({ Message: "route not found" }));
  res.end();
};


//Route handler for api/user POST
const createUserHandler = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const newUser = JSON.parse(body);
      data.push(newUser);
      res.statusCode = 201;
      res.write(JSON.stringify(newUser));
    } catch (error) {
      res.statusCode = 400;
      res.write(JSON.stringify({ message: "Invalid JSON format" }));
    }
    res.end();
  });
};


const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/user" && req.method === "GET") {
        // res.setHeader("Content-Type", "application/json");
        // res.write(JSON.stringify(data));
        // res.end();
        console.log("user route ")
        getUserHandler(req, res);
      } else if (
        req.url.match(/\/api\/user\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        // const id = req.url.split("/")[3];
        // const user = data.find((u) => u.id === parseInt(id));

        // if (user) {
        //   res.setHeader("Content-Type", "application/json");
        //   res.write(JSON.stringify(user));
        // } else {
        //   res.statusCode = 404;
        //   res.write(JSON.stringify({ message: "User not found" }));
        // }
        // res.end();
        getUserByIdHandler(req, res);
      } else if (req.url === '/api/user' && req.method === "POST"){
        createUserHandler(req , res)
      } else {
        // res.setHeader("Content-Type", "application/json");
        // res.write(JSON.stringify({ Message: "route not found" }));
        // res.end();

        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`server is running : ${PORT}`);
});
