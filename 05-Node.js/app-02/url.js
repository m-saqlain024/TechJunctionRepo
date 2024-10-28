var url = require("url");
const fs = require("fs");
const http = require("http");
// var adr = "http://localhost:8080/default.htm?year=2017&month=february";
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query;
// console.log(qdata.month);

http
  .createServer(function (req, res) {
    // Parse the request URL
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;

    // Read the requested file
    fs.readFile(filename, function (err, data) {
      if (err) {
        // If file is not found, respond with a 404 error
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }

      // Determine the content type based on the file extension
      let contentType = "text/html";
      if (filename.endsWith(".js")) {
        contentType = "application/javascript";
      } else if (filename.endsWith(".css")) {
        contentType = "text/css";
      } else if (filename.endsWith(".json")) {
        contentType = "application/json";
      } else if (filename.endsWith(".png")) {
        contentType = "image/png";
      } else if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
        contentType = "image/jpeg";
      } else if (filename.endsWith(".gif")) {
        contentType = "image/gif";
      }

      // Respond with the file content
      res.writeHead(200, { "Content-Type": contentType });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, () => {
    console.log("Server is listening on port 8080");
  });
