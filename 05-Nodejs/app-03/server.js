import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT;

// Get file pathname
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("not found");
      }
      const data = await fs.readFile(filePath)
      res.setHeader('Content-type' , "text/html")
      res.write(data)
      res.end()
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("<h1>Server Error</h1>");
  }

  // console.log(req.method, "method")
  // console.log(req.url, "url")
});

server.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});
